-- Er bare et create statement:
--      Skriver store bokstaver for å skille sql fra JS.attributter. men kan skrive småBokstaver.
CREATE TABLE Kunde(
    id INTEGER AUTO_INCREMENT NOT NULL,
    film VARCHAR(255) NOT NULL,
    antall VARCHAR(255) NOT NULL,
    forNavnet VARCHAR (255) NOT NULL,
    etterNavnet  VARCHAR (255) NOT NULL,
    tlfNret VARCHAR (255) NOT NULL,
    eposten VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);
-- Husk ^ ; etter )