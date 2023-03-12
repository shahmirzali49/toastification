import 'package:flutter/material.dart';
import 'package:toastification/toastification.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const Home(),
    );
  }
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Toastification Example'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xff1976d2),
                ),
                onPressed: () {
                  toastification.showCustom(
                    context: context,
                    builder: (context, holder) {
                      return ToastWidget(
                        item: holder,
                        title: 'Title',
                      );
                    },
                    autoCloseDuration: const Duration(seconds: 5),
                  );
                },
                child: const Text('Default'),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                ),
                onPressed: () {
                  toastification.showCustom(
                    context: context,
                    builder: (context, holder) {
                      return InfoToastWidget(
                        item: holder,
                        title: 'Title',
                      );
                    },
                    autoCloseDuration: const Duration(seconds: 5),
                  );
                },
                child: const Text('Info'),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.amberAccent,
                ),
                onPressed: () {
                  toastification.showCustom(
                    context: context,
                    builder: (context, holder) {
                      return WarningToastWidget(
                        item: holder,
                        title: 'Title',
                      );
                    },
                    autoCloseDuration: const Duration(seconds: 5),
                  );
                },
                child: const Text('Warning'),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.green,
                ),
                onPressed: () {
                  toastification.showCustom(
                    context: context,
                    builder: (context, holder) {
                      return SuccessToastWidget(
                        item: holder,
                        title: 'Title',
                      );
                    },
                    autoCloseDuration: const Duration(seconds: 5),
                  );
                },
                child: const Text('Success'),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.red,
                ),
                onPressed: () {
                  toastification.showCustom(
                    context: context,
                    builder: (context, holder) {
                      return ErrorToastWidget(
                        item: holder,
                        title: 'Title',
                      );
                    },
                    autoCloseDuration: const Duration(seconds: 5),
                  );
                },
                child: const Text('Error'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
