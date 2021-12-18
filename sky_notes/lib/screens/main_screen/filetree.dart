import 'package:flutter/material.dart';
import 'package:sky_notes/screens/main_screen/tag.dart';

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
        color: Colors.grey[400],
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
                flex: 1,
                child: Align(
                    alignment: Alignment.bottomCenter,
                    child: Padding(
                      padding: EdgeInsets.all(5.0),
                      child: TextField(
                        style: TextStyle(color: Colors.black),
                        cursorColor: Colors.black,
                        obscureText: false,
                        decoration: InputDecoration(
                            isCollapsed: true,
                            contentPadding: EdgeInsets.all(10),
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
