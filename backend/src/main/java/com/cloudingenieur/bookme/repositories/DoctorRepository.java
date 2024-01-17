package com.cloudingenieur.bookme.repositories;

import com.cloudingenieur.bookme.entities.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
