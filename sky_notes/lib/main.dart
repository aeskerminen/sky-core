import 'package:flutter/material.dart';
import 'package:sky_notes/latex_editor/latex_editor.dart';
import 'package:sky_notes/main_screen/sidebar/sidebar.dart';
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
      theme: ThemeData(
          brightness: Brightness.light,
          scaffoldBackgroundColor: Colors.grey,
          fontFamily: 'Georgia'),
      home: Scaffold(
        body: const WorkView(),
        drawer: const Drawer(
          backgroundColor: Colors.grey,
          elevation: 8,
          child: SideBar(),
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.startFloat,
        floatingActionButton: Builder(builder: (context) {
          return FloatingActionButton(
              child: const Icon(Icons.notes_sharp),
              backgroundColor: Colors.black.withOpacity(0.9),
              elevation: 8,
              mini: false,
              onPressed: () => Scaffold.of(context).openDrawer());
        }),
      ),
    );
  }
}

final _controller = PageController();
int pageIndex = 0;

class WorkView extends StatelessWidget {
  const WorkView({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        body: PageView(
            controller: _controller,
            children: [const TextEditor(), const LatexEditor(), DrawingPage()]),
        floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            pageIndex >= 2 ? pageIndex = 0 : pageIndex++;
            _controller.jumpToPage(pageIndex);
          },
          child: const Icon(Icons.pages),
          backgroundColor: Colors.black.withOpacity(0.9),
          elevation: 8,
          mini: false,
        ),
      ),
    );
  }
}
