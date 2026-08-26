## Storage

Utility for saving, updating, and deleting uploaded files.

Future<String> Storage.create(UploadedFile file, {String? subdirectory})

Save a file under `public/` and return a public URL.

Future<void> Storage.delete(String fileUrl)

Delete a file by its public URL.

Future<String> Storage.update(String oldFileUrl, UploadedFile newFile, {String? subdirectory})

Replace a file and return the new URL.
