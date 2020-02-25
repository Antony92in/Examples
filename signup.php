<?php

require_once "connect.php";


class Signup //класс регистрации пользователей в БД
{
	
	public $errors = array();

	

	public function check()
	{
		$user = R::findone('users', 'login = ?', [ $_POST['login']]);

		if (strlen($_POST['password'] < 5)) {
			
			$errors[] = 'Пароль должен быть не меннее 5 символов';
		}

		if ($_POST['login'] == $user['login']) {

			$errors[] = 'Этот логин занят';
			
		}

		if ($_POST['email'] == $user['email']) {
			
			$errors[] = 'Этот email занят';
		}

		
		if (empty($_POST['email'])) {
			
			$errors[] = 'Введите email';
		}

		if (!empty($errors)) {
		return array_shift($errors);
	}
	else
	{ 
		$user = R::dispense('users');

		$user->login = $_POST['login'];

		$user->email = $_POST['email'];

		$user->password = password_hash( $_POST['password'] , PASSWORD_DEFAULT);

		R::store( $user );

		return 'OK';
      }
	}



   
}

echo Signup::check();


