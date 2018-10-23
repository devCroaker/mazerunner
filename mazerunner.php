<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MazeRunner</title>
    <link rel="stylesheet" type="text/css" href="./css/mazerunner.css">
</head>
<body>
<div id="canvas_div">
    <canvas id="ctx" style="border:1px solid #000000;"></canvas>
</div>

<?php

$include_dirs = array();
$include_dirs[0]   = './js/includes/';
$include_dirs[1]   = $include_dirs[0].'classes/';
$dir = new DirectoryIterator($include_dirs[1]);
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
        if ($fileinfo->isDir()) {
            $include_dirs[] = $include_dirs[1].$dir.'/';
        }
    }
}

foreach ($include_dirs as $directory) {
    $dir = new DirectoryIterator($directory);
    foreach ($dir as $fileinfo) {
        if (substr($fileinfo->getFilename(),-3) === '.js') {
            echo '<script type="text/javascript" src="'.ltrim($directory,'./').$fileinfo->getFilename().'"></script><br />';
        }
    }
}

echo '<script type="text/javascript" src="js/nodeMaze_controls.js"></script><br />';
echo '<script type="text/javascript" src="js/mazerunner.js"></script><br />';
?>

</body>
</html>