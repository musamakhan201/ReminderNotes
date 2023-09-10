package com.reminder.notes.controller;

import com.reminder.notes.domain.Notes;
import com.reminder.notes.dto.NoteDTO;
import com.reminder.notes.dto.ResponseDTO;
import com.reminder.notes.service.NotesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.reminder.notes.util.Constants.*;

@RestController
@RequestMapping(BASE_PATH)
@CrossOrigin(CROSS_ORIGIN_URL)
public class NotesController {

    private final Logger logger = LoggerFactory.getLogger(NotesController.class);

    @Autowired
    private NotesService notesService;

    @PostMapping(CREATE_PATH)
    public ResponseDTO createNote(@RequestBody NoteDTO noteDTO){
        logger.info("Call landed to create new note");
        return notesService.createNote(noteDTO);
    }

    @GetMapping(FETCH_PATH)
    public List<Notes> fetchNotes(){
        logger.info("Call landed to fetch notes");
        return notesService.fetchNotes();
    }

    @PostMapping(DELETE_PATH)
    public ResponseDTO createNote(@RequestParam String id){
        logger.info("Call landed to delete note");
        return notesService.deleteNote(id);
    }
}
