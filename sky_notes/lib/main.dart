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
      home: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            bottom: const TabBar(tabs: [
              Tab(icon: Icon(Icons.pending_actions)),
              Tab(icon: Icon(Icons.pending_actions)),
              Tab(icon: Icon(Icons.pending_actions)),
            ]),
          ),
          body: TabBarView(
              children: [DrawingPage(), LatexEditor(), TextEditor()]),
        ),
      ),
    );
  }
}
