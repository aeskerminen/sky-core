import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<Offset> points = <Offset>[];

  createAlertDialog(BuildContext context) {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
              content: SingleChildScrollView(
            child: HueRingPicker(
              pickerColor: currentSettings.color,
              onColorChanged: (color) =>
                  setState(() => currentSettings.color = color),
              enableAlpha: false,
              displayThumbColor: true,
            ),
          ));
        });
  }

  @override
  Widget build(BuildContext context) {
    final Container sketchArea = Container(
      margin: const EdgeInsets.all(1.0),
      alignment: Alignment.topLeft,
      color: Colors.blueGrey[50],
      child: CustomPaint(
        painter: Sketcher(points),
      ),
    );

    return Scaffold(
      body: GestureDetector(
        onPanDown: (DragDownDetails details) {
          setState(() {
            points.add(details.localPosition);
          });
        },
        onPanUpdate: (DragUpdateDetails details) {
          setState(() {
            points = List.from(points)..add(details.localPosition);
          });
        },
        onPanEnd: (DragEndDetails details) {
          points.add(Offset.zero);
        },
        child: sketchArea,
      ),
      floatingActionButton: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            FloatingActionButton(
              tooltip: 'Clear Screen',
              backgroundColor: Colors.black,
              child: const Icon(Icons.refresh),
              onPressed: () {
                setState(() => points.clear());
              },
              heroTag: null,
            ),
            const SizedBox(
              height: 5,
            ),
            FloatingActionButton(
              tooltip: 'Undo Action',
              backgroundColor: Colors.black,
              child: const Icon(Icons.undo),
              onPressed: () => placeholder(),
              heroTag: null,
            ),
            const SizedBox(
              height: 5,
            ),
            FloatingActionButton(
              tooltip: 'Color Black',
              backgroundColor: Colors.black,
              child: const Icon(Icons.add),
              onPressed: () => currentSettings.color = Colors.black,
              heroTag: null,
            ),
            const SizedBox(
              height: 5,
            ),
            FloatingActionButton(
              tooltip: 'Color Blue',
              backgroundColor: Colors.black,
              child: const Icon(Icons.remove),
              onPressed: () => currentSettings.color = Colors.blue,
              heroTag: null,
            ),
            const SizedBox(height: 5),
            FloatingActionButton(
              tooltip: 'Color',
              backgroundColor: Colors.black,
              onPressed: () => createAlertDialog(context),
              child: const Icon(Icons.color_lens),
              heroTag: null,
            ),
            SizedBox(
                width: 50,
                child: RotatedBox(
                    quarterTurns: 3,
                    child: Slider(
                        activeColor: currentSettings.color,
                        value: currentSettings.strokeWidth,
                        onChanged: (newValue) {
                          setState(
                              () => currentSettings.strokeWidth = newValue);
                        },
                        min: 1.0,
                        max: 50.0,
                        divisions: 50,
                        label: currentSettings.strokeWidth.round().toString())))
          ]),
    );
  }
}

void placeholder() {}

class Sketcher extends CustomPainter {
  final List<Offset> points;

  Sketcher(this.points);

  @override
  bool shouldRepaint(Sketcher oldDelegate) {
    return oldDelegate.points != points;
  }

  @override
  void paint(Canvas canvas, Size size) {
    Paint paint = currentSettings;

    for (int i = 0; i < points.length - 1; i++) {
      if (points[i] != Offset.zero && points[i + 1] != Offset.zero) {
        canvas.drawLine(points[i], points[i + 1], paint);
      } else if (points[i] != Offset.zero && points[i + 1] == Offset.zero) {
        canvas.drawPoints(PointMode.points, [points[i]], currentSettings);
      }
    }
  }
}

final Paint defaultSettings = Paint()
  ..color = Colors.black
  ..strokeWidth = 5.0
  ..strokeCap = StrokeCap.round;

Paint currentSettings = defaultSettings;
