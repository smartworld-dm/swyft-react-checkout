<!DOCTYPE html>
<html lang="en">
<head>
	@include('includes.head')
</head>
<body>
	<div id="wrapper">
		<header id="header">
			@include('includes.header')
		</header>

		<div id="main">

			@yield('content')

		</div>

		<footer id="footer" class="bg-white">
			@include('includes.footer')
		</footer>
	</div>
	<script src="{{asset('js/app.js')}}"></script>
</body>
</html>