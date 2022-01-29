import 'package:flutter/material.dart';
import 'package:flutter_circle_color_picker/flutter_circle_color_picker.dart';

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
        onTap: () {
          setState(() {});
        },
        onPanUpdate: (DragUpdateDetails details) {
          setState(() {
            RenderBox box = context.findRenderObject() as RenderBox;
            Offset point = box.globalToLocal(details.globalPosition);
            points = List.from(points)..add(point);
          });
        },
        onPanEnd: (DragEndDetails details) {
          points.add(Offset.zero);
        },
        child: sketchArea,
      ),
      floatingActionButton:
          Column(mainAxisAlignment: MainAxisAlignment.end, children: [
        FloatingActionButton(
          tooltip: 'Clear Screen',
          backgroundColor: Colors.blue,
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
          child: const Icon(Icons.undo),
          onPressed: () => placeholder(),
          heroTag: null,
        ),
        const SizedBox(
          height: 5,
        ),
        FloatingActionButton(
          tooltip: 'Color Black',
          child: const Icon(Icons.add),
          onPressed: () => saveSettings(defaultSettings),
          heroTag: null,
        ),
        const SizedBox(
          height: 5,
        ),
        FloatingActionButton(
          tooltip: 'Color Blue',
          child: const Icon(Icons.remove),
          onPressed: () => saveSettings(Paint()
            ..color = Colors.blue
            ..strokeWidth = 4.0),
          heroTag: null,
        ),
        const CircleColorPicker(
          size: Size(240, 240),
        )
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
      }
    }
  }
}

final Paint defaultSettings = Paint()
  ..color = Colors.black
  ..strokeWidth = 4.0
  ..strokeCap = StrokeCap.round;

Paint currentSettings = defaultSettings;

Paint saveSettings(Paint paint) {
  currentSettings = Paint()
    ..color = paint.color
    ..strokeWidth = paint.strokeWidth;

  return currentSettings;
}
