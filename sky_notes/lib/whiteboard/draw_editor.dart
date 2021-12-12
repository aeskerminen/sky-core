import 'package:flutter/material.dart';
import 'package:whiteboardkit/whiteboardkit.dart';

class DrawEditor extends StatefulWidget {
  const DrawEditor({Key? key}) : super(key: key);

  @override
  State<DrawEditor> createState() => _DrawEditorState();
}

class _DrawEditorState extends State<DrawEditor> {
  WhiteboardController? controller;

  @override
  void initState() {
    controller!.onChange().listen((draw) {
      //do something with it
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Text"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Expanded(
              child: Whiteboard(
                controller: controller,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
