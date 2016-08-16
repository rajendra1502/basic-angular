<?php
class Database{
  private $host;
  private $user;
  private $pass;
  private $db;
  public $mysqli;

  public function __construct() {
    $this->db_connect();
  }

  private function db_connect(){
    $this->host = 'localhost';
    $this->user = 'root';
    $this->pass = '';
    $this->db = 'admin';

    $this->mysqli = new mysqli($this->host, $this->user, $this->pass, $this->db);
    return $this->mysqli;
  }

  public function db_num($sql){
        $result = $this->mysqli->query($sql);
        return $result->num_rows;
  }
  
  public function select(){
        $user = array(); 
        $result = $this->mysqli->query('SELECT * FROM users');
        while ($row = $result->fetch_assoc()) {
        array_push($user,$row);
    }
    return $user;
  }
  
  public function getUser($uId){
        $user = array(); 
        $result = $this->mysqli->query('SELECT * FROM users where id= "'.$uId.'"');
        return $result->fetch_assoc();
  }
  
  public function saveUser($userData){
        $fname = $userData['firstname'];
        $email = $userData['emailaddress'];
        $state = $userData['state'];
        $city = $userData['city'];
        $result = $this->mysqli->query('INSERT INTO users (name, email, state, city) VALUES ("'.$fname.'", "'.$email.'", "'.$state.'", "'.$city.'")');
        return $this->mysqli->insert_id;
  }
}

?>