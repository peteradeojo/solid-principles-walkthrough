<?php

spl_autoload_register(function ($path) {
	require (str_replace("\\", DIRECTORY_SEPARATOR, "." .DIRECTORY_SEPARATOR . $path . ".php"));
});
