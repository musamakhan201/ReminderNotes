package com.reminder.notes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReminderNotes {

	public static void main(String[] args) {
		SpringApplication.run(ReminderNotes.class, args);
		System.out.println("Started App");
	}

}
