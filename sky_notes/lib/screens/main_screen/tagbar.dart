import 'package:flutter/material.dart';
import 'package:sky_notes/screens/main_screen/tag.dart';

class TagBar extends StatelessWidget {
  const TagBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: SizedBox(
        height: 50,
        child: Card(
          elevation: 8,
          color: Colors.grey[400],
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
