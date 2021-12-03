import 'package:flutter/material.dart';
import 'package:sky_notes/latex_editor/latex_editor.dart';
import 'package:sky_notes/text_editor/text_editor.dart';
import 'package:sky_notes/whiteboard/whiteboard_screen.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sky Notes',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: Row(
        children: [
          Expanded(
              flex: 1,
              child: Scaffold(
                appBar: AppBar(
                  title: const Text("Sky Notes"),
                ),
              )),
          Expanded(
            flex: 4,
            child: DefaultTabController(
                length: 3,
                child: Material(
                  child: Column(
                    children: [
                      Expanded(
                        flex: 1,
                        child: Container(
                          color: Colors.blue,
                          child: const TabBar(tabs: [
                            Tab(icon: Icon(Icons.pending_actions)),
                            Tab(icon: Icon(Icons.pending_actions)),
                            Tab(icon: Icon(Icons.pending_actions)),
                          ]),
                        ),
                      ),
                      Expanded(
                        flex: 11,
                        child: TabBarView(children: [
                          DrawingPage(),
                          TextEditor(),
                          LatexEditor()
                        ]),
                      )
                    ],
                  ),
                )),
          ),
        ],
      ),
    );
  }
}
