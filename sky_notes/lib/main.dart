import 'package:flutter/material.dart';
import 'package:sky_notes/latex_editor/latex_editor.dart';
import 'package:sky_notes/text_editor/text_editor.dart';
import 'package:sky_notes/whiteboard/whiteboard_screen.dart';
import 'package:window_size/window_size.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  setWindowTitle("Sky notes");

  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({Key? key}) : super(key: key);

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sky Notes',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: Row(children: [
        Expanded(
            flex: 1,
            child: Scaffold(
              appBar: AppBar(
                title: const Text("Sky Notes"),
              ),
              body: Container(
                color: Colors.blueGrey,
                child: Column(
                  children: [
                    Expanded(
                      child: Container(
                        child: const Text("file structure"),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Container(
                        decoration: BoxDecoration(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(7.5)),
                            color: Colors.white,
                            border:
                                Border.all(color: Colors.black, width: 2.5)),
                        child: Padding(
                          padding: const EdgeInsets.all(3),
                          child: Row(
                            children: const [Text("Tag 1"), Text("Tag 2")],
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            )),
        const Divider(
          indent: 1,
          endIndent: 2,
        ),
        Expanded(
          flex: 4,
          child: DefaultTabController(
            length: 3,
            child: Scaffold(
                body: TabBarView(children: [
                  const TextEditor(),
                  const LatexEditor(),
                  DrawingPage()
                ]),
                floatingActionButton: Align(
                  alignment: const Alignment(0.0, 1),
                  child: SizedBox(
                    width: 200,
                    height: 40,
                    child: Container(
                      color: Colors.black,
                      child: const TabBar(tabs: [
                        Tab(icon: Icon(Icons.pending_actions)),
                        Tab(icon: Icon(Icons.pending_actions)),
                        Tab(icon: Icon(Icons.pending_actions)),
                      ]),
                    ),
                  ),
                )),
          ),
        ),
      ]),
    );
  }
}
