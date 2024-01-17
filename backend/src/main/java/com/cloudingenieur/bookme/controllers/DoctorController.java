package com.cloudingenieur.bookme.controllers;

import com.cloudingenieur.bookme.entities.Doctor;
import com.cloudingenieur.bookme.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
@CrossOrigin(origins = "*")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;



    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;

    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> getAllDoctors() {
        List<Doctor> entitySale = doctorRepository.findAll();

            return ResponseEntity.status(HttpStatus.OK).body(entitySale);
    }
}
