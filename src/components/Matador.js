import { Helmet } from 'react-helmet';

const Matador = () => (
  <div className="matador">
    <Helmet>
      <title>Matador | Game Rules</title>
    </Helmet>
    <h1>Matador (Danish)</h1>
    <p className="text-center">These rules are in Danish, because the game itself is in Danish.</p>
    <img src="/img/matador/matador.jpg" alt="Matador" />
    <h2>Matadors formål</h2>
    <ul>
      <li>
        Formålet med Matador er at købe, udleje eller sælge ejendomme så
        fordelagtigt, at man bliver den rigeste spiller og dermed spillets
        eneste matador.
      </li>
      <li>
        Man begynder ved “START” og flytter brikkerne venstre om ifølge
        terningkast. Når en spillerbrik lander på et felt, der ikke allerede
        ejes af nogen anden deltager, kan spilleren købe det af banken og
        indkassere leje af modspillerne, når de lander på det pågældene felt.
        Ønsker spilleren ikke at købe grunden, sætter banken det straks på
        auktion.
      </li>
      <li>Lejesummen forøges betydeligt ved opførelse af huse og hoteller.</li>
      <li>For at skaffe flere penge kan man pantsætte grunde til banken.</li>
      <li>
        Felterne “prøv lykken” giver ret til at trække et kort, hvis ordre
        derefter skal følges.
      </li>
      <li>Sommetider kommer en spiller i fængsel.</li>
      <li>
        Spillet er fuld af spekulationer og spænding, og auktionsholderen kan
        ofte bidrage til at forøge denne.
      </li>
    </ul>
    <h3>Forberedelse:</h3>
    <p>
      En af spillerne vælges til at være bankør. Bankøren giver hver deltager
      30.000 kr. fordelt således:
    </p>

    <p className="money-text text-center">
      2 stk. 5000 kr., 5 stk. 2000 kr., 7 stk. 1000 kr.,
      <br />5 stk. 500 kr., 4 stk. 100 kr. 2 stk. 50 kr.
    </p>
    <img src="/img/matador/money.jpg" alt="Money" />

    <p>
      Banken beholder resten af pengene samt skøderne, de grønne huse og de røde
      hoteller. Gennem banken foregår alle spillets ud- og indbetalinger
      undtagen leje, der betales til ejeren, samt handel med skøder og
      løsladelseskort, der foregår blandt spillerne indbyrdes.
    </p>

    <p>
      “Prøv lykken”-kortene lægges i en bunke på spillepladen med bagsiden opad.
    </p>

    <h2>Selve spillet</h2>
    <p>
      Deltagerenestiller deres biler/brik på frltet “START” og bliver enige om,
      hvem der begynder. Alternativt kan der slås en terning om hvem der
      starter,. Spillet fortsætter derefter i urets retning.
    </p>

    <p>
      Første spiller kaster begge terninger, og flytter sin bil/brik så mange
      felter frem, som øjnene viser. Når en spiller har benyttet retten eller
      opfylt pligten, som feltet angiver, går turen videre til næste spiller.
      Hver gang man passerer “START”, modtager man 4000 kr. fra banken.
    </p>

    <p>
      Lander man på et <b>“prøv lykken”</b>, skal man tage det øverste kort i
      bunken med Prøv lykken-kort og rette sig efter ordlyden på det. Når et
      kort er benyttet lægges det nederst i bunken.
    </p>

    <p>
      Lander man efter et terningkast eller ifølge ordren på et af Prøv
      lykken-kortene på en grund eller virksomhed, der ikke ejes an nogen anden
      deltager, kan man købe denne af banken for den pris, der står på feltet,
      og man får så udleveret skødet, der lægges med forsiden opad foran
      spilleren. Efter de takster der står på skødet, kan man nu opkræve leje af
      de spillere, der lander på ens grund. Køber man ikke skødet, sætter banken
      det straks på auktion, og denne har alle lov til at deltage i.
    </p>

    <p>
      Lander man på <b>“De Fængsles“</b>, skal man gå direkte i fængsel og
      modtager ikke de 4000 kr. for at passere “START”. Lander man derimod på
      feltet <b>“I Fængsel“</b>, er man blot på besøg og fortsætter næste gang
      uden straf.
    </p>

    <p>
      <b>Indkomstskatten</b> har man lov til at betale med 4.000 kr. Men man kan
      også betale 10% af sine værdier: Kontanter, bygninger og den påtrykte pris
      for sine grunde og virksomheder (også pantsatte). Spilleren skal vælge
      betalingsmåden, inden han tæller sine værdier sammen.
    </p>

    <p>
      Man får et <b>ekstrakast</b>, hvis man kaster 2 ens (f.eks. 2 femmere), og
      man skal rette sig både efter forskrifterne for det felt man på efter
      første kast og efter ekstrakastet. Kaster man 2 ens 3 gange i træk, må man
      ikke flytte tredie gang, men skal gå direkte i fængsel.
    </p>

    <p>
      Feltet med <b>Parkering</b> er et fristed, indtil man skal kaste igen.
    </p>

    <b>Man kommer ud af fængslet på en af følgende måder:</b>

    <ol>
      <li>Ved at betale en bøde på 1.000 kr., inden man kaster terningerne.</li>
      <li>
        Ved at benytte et af løsladelseskortene fra bunken med Prøv lykken-kort.
      </li>
      <li>
        Ved at kaste 2 ens. Man flytter straks det antal felter frem, som øjnene
        viser, og har alligevel et ekstrakast
      </li>
    </ol>
    <p>
      Man kan ikke blive i fængslet i mere end tre omgange. Får man ikke 2 ens
      når man kaster tredie gang, må man betale bøden på 1.000 kr. og flytte,
      som øjnene viser. Er man i fængsel, har man stadig ret til at købe grunde
      (ved auktion eller handel spillerende imellem), men man kan ikke kræve
      leje af de andre spillere.
    </p>

    <h2>Huse og hoteller</h2>
    <p>
      Ejer man alle grundene i samme farve, får man dobbelt leje af de
      ubebyggede grunde og har ret til nårsomhelst at bygge huse, der købes hos
      banken til den pris, der står på skøderne.
    </p>

    <p>
      Der skal bygges jævnt, det vil sige at man kan opføre det første hus på
      den grund man ønsker, men inden andet hus opføres på den grund, skal der
      være bygget et hus på hver af de andre grunde i gruppen.
    </p>

    <p>
      Inden man opfører et hotel, skal der være opført fire huse på hver grund i
      gruppen.
    </p>

    <p>
      Der må kun opføres et hotel på hver grund. Når man køber et hotel,
      afleverer man de fire huse tilbage til banken
    </p>

    <p>
      Banken skal, når som helst man ønsker det, tage bygningerne tilbage til
      halv pris. Prisen for et hotel er fem gange prisen for et hus.
    </p>

    <p>
      Har banken ingen bygninger, når man vil købe , må man vente til der kommer
      nogle tilbage. Er der flere der vil købe, og har banken ikke nok til alle,
      sætter banken de bygninger der er, på auktion.
    </p>

    <p>
      Indbyrdes handel med ubebyggede grunde og virksomheder er spillerene
      tillads til den pris, de kan blive enige om.
    </p>

    <p>
      <b>NB!</b> Har man bygget, skal man sælge bygningerne tilbage til banken,
      inden man kan afhænde nogen grund i den pågældende gruppe.
    </p>

    <h2>Pantsætning</h2>
    <p>
      Man kan kun pantsætte sine ubebyggede grunde og virksomheder til banken
      for det beløb, der står trykt på skøderne. Har man bygninger på grundende,
      skal man først sælge disse tilbage til banken. Spilleren beholder
      skødekortene, men vender bagsiden opad. Renten er 10% (der rundes op til
      nærmeste 100 kr.), og renten betales sammen med lånet, når pantsætningen
      hæves.
    </p>

    <ul>
      <li>
        Hvis en pantsat ejendom sælges, og køber ikke straks hæver
        pantsætningen, skal han alligevel betale 10%, hvis køber senere hæver
        pantsætningen.
      </li>
      <li>Af pantsat ejendom kan der ikke opkræves leje.</li>
      <li>Banken giver kun lån mod pantsætningssikkerhed.</li>
      <li>
        Pantsætning af grunde og virksomheder samt handel med bygninger, sker
        kun gennem banken.
      </li>
      <li>Spillerene må ikke låne indbyrdes.</li>
    </ul>

    <p>
      <b>Glemmer</b> man at opkræve leje af en medspiller, har man tabt sin ret,
      når spiller nr to efter vedkommende medspiller har kastet terningerne.
    </p>

    <h3>Fallit</h3>
    <p>
      Skylder en spiller mere, end han ejer, skal han overdrage alt til sin
      kreditor efter at have solgt eventuelle bygninger tilbage til banken, og
      han må derefter udgå af spillet.
    </p>
    <p>
      Er det banken, der er kreditor, sælger bankøren straks modtagne grunde på
      auktion.
    </p>

    <h3>Hurtigt spil</h3>
    <p>
      Bankøren blander skødekortene og giver hver spiller to skøder, for hvilke
      bankøren modtager den trykte pris.
    </p>
    <p>
      Der bestemmes en spilletid, og når tiden er gået, er den spiller Matador,
      som har størst formue.
    </p>
  </div>
);

export default Matador;
