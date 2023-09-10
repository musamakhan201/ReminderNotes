package com.reminder.notes.repository;

import com.reminder.notes.domain.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotesRepository extends JpaRepository<Notes,Integer> {
    Notes findById(String id);
}
