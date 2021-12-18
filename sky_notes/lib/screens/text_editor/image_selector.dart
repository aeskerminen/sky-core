import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

abstract class ZefyrImageDelegate<S> {
  /// Unique key to identify camera source.
  S get cameraSource;

  /// Unique key to identify gallery source.
  S get gallerySource;

  /// Builds image widget for specified image [key].
  ///
  /// The [key] argument contains value which was previously returned from
  /// [pickImage].
  Widget buildImage(BuildContext context, String key);

  /// Picks an image from specified [source].
  ///
  /// Returns unique string key for the selected image. Returned key is stored
  /// in the document.
  ///
  /// Depending on your application returned key may represent a path to
  /// an image file on user's device, an HTTP link, or an identifier generated
  /// by a file hosting service like AWS S3 or Google Drive.
  Future<String?> pickImage(S source);
}

class MyAppZefyrImageDelegate implements ZefyrImageDelegate<ImageSource> {
  @override
  Future<String?> pickImage(ImageSource source) async {
    final ImagePicker _picker = ImagePicker();
    final file = await _picker.pickImage(source: source);
    // if (file == null) return null;
    // We simply return the absolute path to selected file.
    return file?.path;
  }

  @override
  Widget buildImage(BuildContext context, String key) {
    final file = File.fromUri(Uri.parse(key));

    /// Create standard [FileImage] provider. If [key] was an HTTP link
    /// we could use [NetworkImage] instead.
    final image = FileImage(file);
    return Image(image: image);
  }

  @override
  ImageSource get cameraSource => ImageSource.camera;

  @override
  ImageSource get gallerySource => ImageSource.gallery;
}
