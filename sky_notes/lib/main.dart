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
        theme: ThemeData(primarySwatch: Colors.grey),
        home: Scaffold(
          appBar: AppBar(
            title: const Text("Sky Notes"),
          ),
          body: const WorkView(),
          drawer: const Drawer(
            elevation: 16,
            child: SideBar(),
          ),
        ));
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
            floatingActionButtonLocation:
                FloatingActionButtonLocation.startFloat,
            floatingActionButton: FloatingActionButton(
              onPressed: () {},
              child: const Icon(Icons.arrow_upward_rounded),
              backgroundColor: Colors.white.withOpacity(0.9),
              elevation: 0,
              mini: true,
            )));
  }
}

// Container(
//                 color: Colors.grey[200],
//                 child: const TabBar(tabs: [
//                   Tab(icon: Icon(Icons.pending_actions)),
//                   Tab(icon: Icon(Icons.pending_actions)),
//                   Tab(icon: Icon(Icons.pending_actions)),
//                 ]),
//               ))