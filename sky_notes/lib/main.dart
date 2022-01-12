import 'package:flutter/material.dart';

void main() {
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

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
          color: Colors.white,
        ),
        bottomSheet: Align(
          alignment: Alignment.bottomCenter,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: SizedBox(
              height: 50,
              width: 225,
              child: Container(
                color: const Color(0xFF383838),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: const [
                    ToolbarButton(),
                    ToolbarButton(),
                    ToolbarButton(),
                    ToolbarButton()
                  ],
                ),
              ),
            ),
          ),
        ));
  }
}

class ToolbarButton extends StatelessWidget {
  const ToolbarButton({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left: 7, right: 7),
      child: Container(
          height: 38.5,
          width: 38.5,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
            boxShadow: const [
              BoxShadow(
                  color: Colors.black, blurRadius: 4, offset: Offset(3, 4))
            ],
          )),
    );
  }
}


// 0x383838