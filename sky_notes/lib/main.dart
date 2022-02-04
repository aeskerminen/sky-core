import 'package:flutter/material.dart';
import 'package:hotkey_manager/hotkey_manager.dart';
import 'package:sky_notes/pages/text_editor/text_editor.dart';
import 'package:sky_notes/pages/whiteboard/whiteboard.dart';

void main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sky notes',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const Home(),
    );
  }
}

class TBIntent extends Intent {}

late final AnimationController _controller;

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> with SingleTickerProviderStateMixin {
  bool _visible = true;

  final HotKey _hotKey = HotKey(
    KeyCode.keyQ,
    modifiers: [KeyModifier.control],
    // Set hotkey scope (default is HotKeyScope.system)
    scope: HotKeyScope.inapp, // Set as inapp-wide hotkey.
  );

  @override
  void initState() {
    super.initState();

    hotKeyManager.register(
      _hotKey,
      keyDownHandler: (hotKey) {
        setState(() {
          _visible = !_visible;
        });
      },
    );
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 200),
    );
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        backgroundColor: Colors.grey,
        body: const TabBarView(
          children: [MyHomePage(), TextEditor()],
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
        floatingActionButton: SlidingToolbar(
          child: PreferredSize(
              preferredSize: const Size.fromHeight(100),
              child: Align(
                alignment: Alignment.bottomCenter,
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: SizedBox(
                    height: 50,
                    width: 215,
                    child: Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFF383838),
                        borderRadius: BorderRadius.circular(0),
                        boxShadow: const [
                          // BoxShadow(blurRadius: 4, offset: Offset(2, 3))
                        ],
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Switch(),
                          ToolbarButton(),
                          ToolbarButton()
                        ],
                      ),
                    ),
                  ),
                ),
              )),
          controller: _controller,
          visible: _visible,
        ),
      ),
    );
  }
}

class SlidingToolbar extends StatelessWidget implements PreferredSizeWidget {
  SlidingToolbar({
    required this.child,
    required this.controller,
    required this.visible,
  });

  final PreferredSizeWidget child;
  final AnimationController controller;
  final bool visible;

  @override
  Size get preferredSize => child.preferredSize;

  @override
  Widget build(BuildContext context) {
    visible ? controller.reverse() : controller.forward();
    return SlideTransition(
      position: Tween<Offset>(begin: Offset.zero, end: const Offset(0, 0.065))
          .animate(
        CurvedAnimation(parent: controller, curve: Curves.linear),
      ),
      child: child,
    );
  }
}

class Switch extends StatefulWidget {
  const Switch({Key? key}) : super(key: key);

  @override
  _SwitchState createState() => _SwitchState();
}

class _SwitchState extends State<Switch> {
  final List<bool> isSelected = [true, false];
  int index = 0;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(4.0),
      child: ToggleButtons(
        children: const <Widget>[Icon(Icons.file_copy_sharp), Icon(Icons.draw)],
        color: Colors.grey,
        selectedColor: Colors.black,
        fillColor: Colors.white,
        borderWidth: 2.5,
        borderRadius: BorderRadius.circular(0),
        onPressed: (int index) {
          setState(() {
            for (int buttonIndex = 0;
                buttonIndex < isSelected.length;
                buttonIndex++) {
              if (buttonIndex == index) {
                isSelected[buttonIndex] = true;
              } else {
                isSelected[buttonIndex] = false;
              }
              DefaultTabController.of(context)!.animateTo(index);
            }
          });
        },
        isSelected: isSelected,
      ),
    );
  }
}

class ToolbarButton extends StatelessWidget {
  const ToolbarButton({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 4, right: 4),
      child: Container(
        height: 38.5,
        width: 38.5,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(0),
          color: Colors.white,
        ),
        child: TextButton(
          onPressed: () => {},
          child: const Icon(
            Icons.settings,
            color: Colors.black,
          ),
          style: TextButton.styleFrom(
              alignment: Alignment.center, padding: EdgeInsets.zero),
        ),
      ),
    );
  }
}


// 0x383838