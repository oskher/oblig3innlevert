package com.example.oblig3innlevert;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;

@Repository // Denne trengs som mal for å koble opp til databasen
public class BilletterRepository {
//    JS:
//      public final List <Billetter> alleBilletter = new ArrayList<>();
//    DB:
//      Ingenting trengs siden den lagres i DB, ikke controller/tjener og da LAGRER DU under:

//    Standard DB kode:
    @Autowired // Denne trens for å knytte programmet opp til databasen
    private JdbcTemplate db;

//    DB metoder opprettes:
//       Legg merke til at mye er lik JS controller, men sql-kode skrives i streng og bruker db.update/query istedenfor JS arrayNavn.clear() typ.
    public void registrerBillett(Billetter innBillet){
        String sql = "INSERT INTO Kunde (film, antall, forNavnet, etterNavnet, tlfNret, eposten) VALUES (?, ?, ?, ?, ?, ?)";
        db.update(sql, innBillet.getFilm(), innBillet.getAntall(), innBillet.getForNavnet(),
                innBillet.getEtterNavnet(), innBillet.getTlfNret(), innBillet.getEposten() );
    }

    public List<Billetter> hentUt(){ // NB! Husk List <Billetter> da denne bestemmer type return - denne GLEMEMR DU
        String sql = "SELECT * FROM Kunde"; // asc = funskjon for å sortere fra a-å og desc: å-a
        List <Billetter> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billetter.class));
        // Bean: gjør at Controller/JS og DataBase samhandler.
        //       Her lagres attributtene som et objekt, samtidig som Bean bestemmer lengden på hver row/kolonne i databasen.
        //       samtidig opprettes et array av type Billetter
        // NB!   Attributter mpå hete samme som i classen (Billetter).
        Collections.sort(alleBilletter);
        return alleBilletter;
    }

    public void slettBilletter(){
        String sql = "DELETE FROM Kunde"; // sql kan skrives i små/store bokstaver.
        db.update(sql); // Denne aksesserer og godkjenner delete over. trenger ikke clear() ettersom det er JS-språk, ikke DB.
    }
}
