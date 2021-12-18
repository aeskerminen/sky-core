import 'package:flutter/material.dart';
import 'package:sky_notes/screens/main_screen/filetree.dart';
import 'package:sky_notes/screens/main_screen/tagbar.dart';

class SideBar extends StatelessWidget {
  const SideBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Notes"),
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
