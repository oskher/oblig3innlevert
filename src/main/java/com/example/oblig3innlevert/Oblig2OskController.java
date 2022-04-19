package com.example.oblig3innlevert;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
// Restcontroller skal stå utenfor public class:
public class Oblig2OskController {
//    JS:
//      public final List<Billetter> alleBilletter = new ArrayList<>();
//    DB:
//      DataBase skal IKKE ha ^ siden den ikke lagres her, men i DB
//      MEN
//      for å lagres i DB, må den ha autowire og repository.

    @Autowired
    private BilletterRepository rep; // rep = variabel i controller for repository;


    @PostMapping ("/lagre")
    public void registrer(Billetter dataFraHtml){
//     JS:
//           alleBilletter.add(dataFraHtml);
//     DB:
        rep.registrerBillett(dataFraHtml); // Hente samma navn for lagre funksjon i repository.
    }

    @GetMapping ("/printUt")
    public List<Billetter> printUt(){
//     JS:
//        return alleBilletter;
//     DB:
        return rep.hentUt();
    }

//    Sorteringsmetode:      !!!!!!!!


    @GetMapping ("/slettAlle")
    public void slett(){
//     JS:
//          alleBilletter.clear();
//     DB:
        rep.slettBilletter();
    }

}

