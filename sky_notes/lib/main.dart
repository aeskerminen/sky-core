import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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
      home: Row(children: const [
        Expanded(flex: 1, child: SideBar()),
        Divider(indent: 1, endIndent: 2),
        Expanded(flex: 4, child: WorkView()),
      ]),
    );
  }
}

class WorkView extends StatelessWidget {
  const WorkView({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
          body: TabBarView(children: [
            const TextEditor(),
            const LatexEditor(),
            DrawingPage()
          ]),
          floatingActionButton: Align(
            alignment: const Alignment(0.0, 1.025),
            child: SizedBox(
              width: 200,
              height: 40,
              child: Container(
                color: Colors.cyan,
                child: const TabBar(tabs: [
                  Tab(icon: Icon(Icons.pending_actions)),
                  Tab(icon: Icon(Icons.pending_actions)),
                  Tab(icon: Icon(Icons.pending_actions)),
                ]),
              ),
            ),
          )),
    );
  }
}

class SideBar extends StatelessWidget {
  const SideBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Sky Notes"),
      ),
      body: Container(
        color: Colors.white,
        child: Column(
          children: const [Expanded(child: FileTree()), TagBar()],
        ),
      ),
    );
  }
}

class FileTree extends StatelessWidget {
  const FileTree({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: Card(
        elevation: 8,
        color: Colors.blue,
        shadowColor: Colors.black,
        child: Column(
          children: [
            Expanded(
              flex: 10,
              child: ListView(
                scrollDirection: Axis.vertical,
                padding: const EdgeInsets.all(5.0),
                children: const <Widget>[
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "Mathematics"),
                  Tag(tagName: "MAA8"),
                  Tag(
                    tagName: "Impossible",
                  ),
                  Tag(
                    tagName: "To Learn",
                  ),
                  Tag(
                    tagName: "A-level",
                  )
                ],
              ),
            ),
            const Expanded(
                flex: 2,
                child: Align(
                    alignment: Alignment.bottomCenter,
                    child: Padding(
                      padding: EdgeInsets.all(5.0),
                      child: TextField(
                        style: TextStyle(color: Colors.black),
                        cursorColor: Colors.black,
                        obscureText: false,
                        decoration: InputDecoration(
                            filled: true,
                            fillColor: Colors.white,
                            border: UnderlineInputBorder(),
                            hintText: "Notes..."),
                      ),
                    )))
          ],
        ),
      ),
    );
  }
}

class TagBar extends StatelessWidget {
  const TagBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: Container(
        height: 50,
        child: Card(
          elevation: 8,
          color: Colors.blue,
          shadowColor: Colors.black,
          child: ListView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.all(3.0),
            children: const <Widget>[
              Tag(tagName: "Mathematics"),
              Tag(tagName: "MAA8"),
              Tag(
                tagName: "Impossible",
              ),
              Tag(
                tagName: "To Learn",
              ),
              Tag(
                tagName: "A-level",
              )
            ],
          ),
        ),
      ),
    );
  }
}

class Tag extends StatelessWidget {
  final String? tagName;

  const Tag({Key? key, this.tagName}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      color: Colors.white,
      shadowColor: Colors.black,
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: Text(tagName.toString()),
      ),
    );
  }
}
