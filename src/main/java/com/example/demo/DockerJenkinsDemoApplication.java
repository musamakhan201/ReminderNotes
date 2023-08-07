package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DockerJenkinsDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DockerJenkinsDemoApplication.class, args);
		System.out.println("Started App");
	}

}
