<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="favicon.ico" />
    <title>Lista de Tareas en VueJS</title>

    <script defer="defer" src="{{ asset('js/chunk-vendors.js') }}"></script>
    <script defer="defer" src="{{ asset('js/app.js') }}"></script>
    <link href="{{ asset('css/chunk-vendors.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
  </head>
  <body>
    <noscript>
      <strong>Esta aplicación necesita JavaScript habilitado para funcionar</strong>
    </noscript>
    <div id="app"></div>
  </body>
</html>
