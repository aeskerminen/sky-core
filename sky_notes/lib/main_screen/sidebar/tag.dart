import 'package:flutter/material.dart';

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
