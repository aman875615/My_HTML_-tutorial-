<?php
// Start session
session_start();

// Store username
$_SESSION['username'] = "Aman";

// Set cookie
setcookie("loginUser", "Aman", time()+3600);

// Logout
if(isset($_GET['logout'])){
  session_destroy();
  setcookie("loginUser", "", time()-3600);
  echo "Logged Out";
}
?>
