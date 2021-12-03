import 'package:flutter/material.dart';
import 'package:sky_notes/whiteboard/whiteboard_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

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
              children: [DrawingPage(), DrawingPage(), DrawingPage()]),
        ),
      ),
    );
  }
}
