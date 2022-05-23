BEGIN;

INSERT INTO
    "destination" (
        "city_name",
        "country",
        "city_code",
        "country_code",
        "continent",
        "latitude",
        "longitude",
        "landscape",
        "season",
        "budget",
        "history",
        "destination_visual"
    )
VALUES
    (
        'Paris',
        'France',
        'PAR',
        'FR',
        'Europe',
        '48.852937',
        '2.35005',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"},{"froid", "tempéré", "chaud", "tempéré"}}',
        '{"moyen", "grand"}',
        'L’histoire de Paris est liée à la conjonction de plusieurs facteurs géographiques et politiques.
        C''est Clovis qui décide, au Ve siècle, d''installer les organes fixes du pouvoir politique du royaume
        dans la petite cité des Paris. Cette position de capitale sera confirmée par les Capétiens,
        après une parenthèse de deux siècles durant l''époque Carolingienne.
        La position de Paris, au carrefour entre les itinéraires commerciaux terrestres et fluviaux au cœur d''une riche région agricole,
        en a fait une des principales villes de France au cours du xe siècle, avec des palais royaux,
        de riches abbayes et une cathédrale ; au cours du xiie siècle, Paris est devenue un des premiers centres en Europe
        pour l''enseignement et les arts. Wikipedia',
        'paris.jpg'
    ),
    (
        'Dijon',
        'France',
        'DIJ',
        'FR',
        'Europe',
        '47.321581',
        '5.04147',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"},{"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Capitale de la Bourgogne historique, Dijon apparaît comme une cité harmonieuse et vivante
    façonnée par une histoire exceptionnellement riche, en deux actes majeurs : l''épopée des grands ducs d''Occident
    (les ducs de Bourgogne) qui, de 1363 à 1477, en font un foyer d''art international et une capitale européenne avant l''heure,
    puis le temps du Parlement de Bourgogne et de ses parlementaires qui façonnent la ville pendant 3 siècles
    et la modèlent entre son palais des États et sa centaine d''hôtels particuliers. De cette histoire,
    Dijon a tiré un patrimoine architectural hors du commun et d''une rare densité. Dijon.fr',
        'dijon.jpg'
    ),
    (
        'Annecy',
        'France',
        'NCY',
        'FR',
        'Europe',
        '45.899235',
        '6.128885',
        '{"ville", "Montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Les rives du lac d''Annecy sont occupées depuis l''an 3100 avant J-C.
    Annecy, quant à elle, ne fût créée qu''à partir de 50 avant J-C et portait alors le nom de Boutae
    ou encore Bautas. A cette époque, Annecy n''était encore qu''un bourg romain et n''était peuplée que de 2000 habitants,
    avant la chute de l''Empire romain. Annecy-ville.fr',
        'annecy.jpg'
    ),
    (
        'Deauville',
        'France',
        'DOL',
        'FR',
        'Europe',
        '49.36',
        '0.0752778',
        '{"ville", "Mer", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "tempéré", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Difficile de l’imaginer aujourd’hui mais, au milieu du XIXe siècle,
        il n’y a rien, ou presque, à « Dosville ».
        Seulement un tout petit village sur les coteaux du mont Canisy,
        dominant une vaste zone de marais et de dunes.
        En 1858, avec la vogue des bains de mer, le duc de Morny,
        financier et demi-frère de Napoléon III, flaire la bonne affaire.
        Il pressent le potentiel de ce site pour accueillir et satisfaire
        la haute société parisienne avide de plaisirs iodés et de divertissement.',
        'deauville.jpg'
    ),
    (
        'Avoriaz',
        'France',
        'AVF',
        'FR',
        'Europe',
        '46.192544',
        '6.770286',
        '{"Montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen", "grand"}',
        'Depuis sa création en 1966, Avoriaz 1800 a toujours un temps d’avance
        et une vision responsable du tourisme de montagne.
        Le plateau sur lequel est construit la station appartenait autrefois à une illustre famille du Chablais,
        les comtes de Rovorée. Cédés à la commune de Morzine,
        les alpages prirent le nom de terres « Rovorée » puis, au fil du temps,
        la prononciation et le nom de ces terres évolua en « Avorée », puis  « Avoréaz »
        pour finalement devenir le nom d’Avoriaz (le « z » ne se prononce pas)
        tel que nous le connaissons aujourd’hui.
        À cette époque, ce plateau très sec et peu fertile ne compte que quelques chalets
        pour abriter les bergers qui emmontagnent au printemps avec les troupeaux de la vallée
        et démontagnent à l’automne. avoriaz.com',
        'avoriaz.jpg'
    ),
    (
        'Ajaccio',
        'France',
        'AJA',
        'FR',
        'Europe',
        '41.926399',
        '8.737603',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "chaud"}}',
        '{"petit", "moyen", "grand"}',
        'Une légende dit qu’Ajaccio aurait été fondée par le héros grec légendaire Ajax qui lui aurait donné son nom.
    Une autre, plus réaliste, est que son nom aurait été apparenté au toscan agghiacciu (enclos à brebis),
    mais on retrouve Adjacium, mentionné au 5e siècle dans la cosmographie de Ravenne…
    Quoiqu’il en soit, ce qui est sûr, c’est qu’elle fut fondée en 1492.
    On l’appelle aussi « cité impériale » et autrefois « cité du corail ».
    Elle est connue pour être la première ville française libérée durant la 2ème Guerre mondiale, le 9 septembre 1943.
    C’est en Octobre 1943 qu’elle sera totalement libérée, après la libération de Bastia. port.ajaccio.fr',
        'ajaccio.jpg'
    ),
    (
        'Méribel-Courchevel',
        'France',
        'MFX',
        'FR',
        'Europe',
        '45.41538',
        '6.63643',
        '{"montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"moyen", "grand"}',
        'En 1945, le Conseil général de la Savoie décida d''intervenir dans l''aménagement touristique des Trois Vallées.
        Le 3 mai 1946, le Conseil municipal de Saint-Bon sous la présidence de son maire, Francis-Eugène Mugnier,
        et à l''unanimité, accepta de céder au Département les terrains communaux nécessaires à la construction
        d''une nouvelle station de sports d''hiver (Tovets, Bellecôte, Loze, Vizelle).
        Laurent Chappis, architecte-urbaniste, fut alors chargé d''élaborer le plan d''urbanisme de cette nouvelle station.
        1946 fut l''année de la construction de la route d''accès entre Courchevel et les Tovets, des premiers hôtels
        (hôtel départemental des Trois Vallées, chalet-hôtel de la Loze) et des premières remontées mécaniques
        (téléskis de la Loze et des Tovets). mairie-courchevel.com',
        'meribel.jpg'
    ),
    (
        'La Baule',
        'France',
        'LBY',
        'FR',
        'Europe',
        '47.284373',
        '-2.395159',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Le nom d''Escoublac, relevé dès le XIIIe siècle, est celui de la paroisse du lieu.
        Son nom devient celui de la commune (constituée en 1790) laquelle prend ensuite le nom d''Escoublac-La Baule.
        La commune est une dernière fois baptisée en 1961, du nom de La Baule-Escoublac.
        À l''origine, la "Bôle" était un lieu-dit sur le littoral, au droit d''Escoublac.
        Ce nom désigne, en breton guérandais, un rivage marécageux, lequel est recouvert lors des grandes marées.
        En 1879, le premier train de chemin-de-fer, Saint-Nazaire-Le Croisic, s’arrête là, au milieu des dunes plantées de pins.
        Suite à la progression de la montée des dunes de sable apportées par les tempêtes,
        le bourg d’Escoublac doit s’établir à un kilomètre de l’ancien village dans les terres. labaule.fr',
        'la-baule.jpg'
    ),
    (
        'Lyon',
        'France',
        'LYN',
        'FR',
        'Europe',
        '45.757814',
        '4.832011',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Lyon est fondé en -43 par les Romains sur un site que les Gaulois occupent depuis -600 environ.
        D''après la légende, les fondateurs mythiques du site celtique sont le roi Atepomaros et le druide Momoros.
        La ville romaine, elle, se développe rapidement et devient capitale de la Gaule en -27. A son apogée, au Deuxième Siècle (années 100),
        la ville joue un rôle important de carrefour commercial (or et vin, entre autres)
        et artisanal dans l’Empire et constitue la fierté des empereurs, qui y séjourne régulièrement.
        Elle régresse en même temps que l’Empire Romain (à partir des années 300). lacivilisationlyonnaise.wordpress.com',
        'lyon.jpg'
    ),
    (
        'Nice',
        'France',
        'NCE',
        'FR',
        'Europe',
        '43.700936',
        '7.268391',
        '{"mer", "ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'L’histoire de Nice se caractérise essentiellement par deux éléments.
        C''est tout d''abord une ville frontière, qui a fréquemment changé de souveraineté.
        Elle a été ainsi successivement ligure, grecque et romaine, avant de faire partie du Royaume ostrogoth d''Italie,
        puis de l''Empire romain d''Orient et du royaume d''Italie (Saint-Empire Romain), devenant ensuite génoise,
        provençale, savoyarde, piémontaise et enfin française. C''est par ailleurs une ville dont le développement a été très rapide
        et dû essentiellement au tourisme. Ces deux particularités ont entraîné des conséquences importantes sur le plan social,
        politique, économique, culturel et urbanistique. wikipedia',
        'nice.jpg'
    ),
    (
        'Montpellier',
        'France',
        'MPL',
        'FR',
        'Europe',
        '43.611242',
        '3.876734',
        '{"mer", "ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Montpellier a connu une histoire bien particulière, tantôt très calme, tantôt très mouvementée.
        Née au milieu du Moyen Âge, au début de la période de grande croissance économique, démographique et culturelle,
        elle fut durant ses premiers siècles d’existence le modèle même de la réussite à la médiévale.
        Cosmopolite dès ses origines, elle fut très vite un centre du savoir. Touchée plus profondément que les autres grandes villes
        par la crise des xive et xve siècles, elle ne s’en remit jamais complètement et cessa d’être un grand centre économique,
        mais son importance intellectuelle et religieuse ne diminua pas. Touchée de plein fouet par les guerres de religion,
        elle demeura par la suite une ville réputée pour sa douceur de vivre. Depuis une trentaine d’années surtout,
        elle connaît à nouveau un très fort développement, et le charme intact des rues chargées d’histoire de l’Écusson
        n’est certainement pas étranger à son attractivité. wikipedia',
        'montpellier.jpg'
    ),
    (
        'Madrid',
        'Espagne',
        'MAD',
        'ES',
        'Europe',
        '40.416705',
        '-3.703582',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Madrid est fondée par l''émir Muhammad Ier à la fin du IXéme siècle, en 1047 elle est échangée au Roi de Tolède
        par Ferdinand Ier de Castille qui vient de la conquérir. En 1085, Alphonse VI prend la ville de Tolède,
        Madrid entre dans le royaume de Castille. La ville est cependant détruite par les almoravides en 1109.
        En 1217, François d''Assise fonde un monastère à Madrid. Durant les siècles suivant,
        de nombreux monuments religieux sont construits à Madrid et la ville se développe de plus en plus.
        En 1606, Madrid est désignée capitale de l''Espagne. La ville connaît une période de construction intense au XVIIIéme siècle :
        Casa de Correos, parc du Retiro, musée du Prado, Plaza Mayor... . cityzeum.com',
        'madrid.jpg'
    ),
    (
        'Barcelone',
        'Espagne',
        'BCN',
        'ES',
        'Europe',
        '41.382894',
        '2.177432',
        '{"mer", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "chaud"}}',
        '{"petit", "moyen"}',
        'Parmi les populations qui se sont succédé sur ce territoire, on compte les Ibères,
        les Romains, les Juifs, les Wisigoths, les Musulmans et les Chrétiens.
        À la fois capitale de Catalogne et seconde ville d''Espagne en importance,
        la Ciutat Comtal (Comté de Barcelone) a forgé sa propre stature avec le temps.
        Petite colonie romaine à ses débuts, elle s''est convertie en une ville cosmopolite reconnue internationalement
        pour des aspects relatifs à son économie, à son patrimoine artistique, à sa culture, au sport et à la vie sociale. wikipedia',
        'barcelone.jpg'
    ),
    (
        'Fuerteventura, Canary Islands',
        'Espagne',
        'FUE',
        'ES',
        'Europe',
        '28.400377',
        '-14.00487',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "chaud", "chaud"}}',
        '{"petit", "moyen"}',
        'Fuerteventura est la plus ancienne des îles Canaries. Sa formation débute il y a environ vingt millions d''années
        par des éruptions volcaniques. Cependant, la majorité de l''île se forme il y a cinq millions d''années.
        L''activité volcanique cesse il y a 4 000 ou 5 000 ans, depuis l''érosion fait son travail.
        Fuerteventura, jadis appelée Fortaventure en français, est une île d''Espagne située dans l''océan Atlantique
        et faisant partie des îles Canaries. Deuxième île de cet archipel par sa taille, elle est celle qui est la plus proche
        du continent africain, distante de 97 kilomètres vers le sud-est avec les côtes marocaines.
        L''île fait partie de la province de Las Palmas et sa capitale est Puerto del Rosario.
        Peuplée depuis le Ier millénaire av. J.-C. par des populations berbères guanches venus d''Afrique,
        l''île a une population de 107 367 habitants en 2015, ce qui en fait la quatrième île la plus peuplée des îles Canaries.
        L''activité économique principale de Fuerteventura repose, depuis les années 1960,
        sur le secteur touristique dominé par l''exploitation des stations balnéaires.
        Le 26 mai 2009, l''ensemble de l''île est reconnu réserve de biosphère par l''Unesco. wikipedia',
        'fuerteventura.jpg'
    ),
    (
        'Bilbao',
        'Espagne',
        'BIO',
        'ES',
        'Europe',
        '43.263002',
        '-2.935004',
        '{"mer", "ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Trop souvent délaissée au profit des autres métropoles espagnoles, la ville de Bilbao, située au nord de l’Espagne,
        est depuis quelques années une nouvelle destination touristique caractérisée par son rayonnement culturel.
        Ancienne cité industrielle, légèrement laissée à l’abandon dans les années 80,
        elle a su se débarrasser de son habit poussiéreux et se réinventer.
        En 1997, l’ouverture du musée d’art moderne et contemporain Guggenheim est une réussite et entraîne
        une révolution architecturale au sein de la ville. Aujourd’hui les chefs d’œuvre avant-gardistes comme le pont La Slave,
        les bouches de métro et le musée Guggenheim attirent de nombreux touristes qui font la fierté des habitants de Bilbao.
        generationvoyage.fr',
        'bilbao.jpg'
    ),
    (
        'Malaga',
        'Espagne',
        'AGP',
        'ES',
        'Europe',
        '36.721303',
        '-4.421637',
        '{"mer", "ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "chaud", "chaud"}}',
        '{"petit", "moyen", "grand"}',
        'Malaga, fut fondée par les phéniciens aux environs de 800 av. J.C. sous le nom de Malaka (salaison de poissons)
        et utilisée comme enclave commerciale après la colonisation commencée en 1.100 av. J.C. avec la fondation de Gadir (Cadix).
        Après la chute de l’empire romain, Malaga est touchée par les grandes migrations et établissements de peuples germaniques,
        concrètement les vandales qui apportèrent d’Orient le credo arien. Au début du VIIIème siècle,
        la chute de l’empire gothique se précise et l''invasion des arabes venant des côtes d’Afrique du Nord commence dans la péninsule ibérique.
        C’est exactement le 19 août 1487 que la ville tomba (la dernière ville reconquise fut Grenade en 1492).
        A partir de là, les communautés religieuses furent essentielles au développement urbain, des faubourgs se créant autour de la ville
        ainsi que les couvents de la Victoire et de la Trinité. Une grand place vit le jour pour la première fois : La Plaza Mayor,
        aujourd’hui Place de la Constitution. instituto-picasso.com',
        'malaga.jpg'
    ),
    (
        'Valence',
        'Espagne',
        'VLC',
        'ES',
        'Europe',
        '39.469707',
        '-0.376335',
        '{"mer", "ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Valence est une ville d''Espagne, située dans l''est du pays sur la côte méditerranéenne.
        Fondée en 138 av. J.-C. par le consul romain Decimus Junius Brutus Callaicus sous le nom de Valentia Edetanorum,
        Valence devient, au Moyen Âge, la capitale du royaume de Valence.
        Vue panoramique de Valence depuis le Micalet. Troisième ville d''Espagne par la population qui est passée à
        789 744 habitants en 20211, Valence est aujourd''hui la capitale de la Communauté valencienne et
        d''une de ses trois provinces, la province de Valence. wikipedia',
        'valencia.jpg'
    ),
    (
        'Séville',
        'Espagne',
        'SVQ',
        'ES',
        'Europe',
        '37.38863',
        '-5.99534',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "chaud", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'La ville de Séville, en Espagne, occupe une place privilégiée dans l''histoire du pays.
        Elle ne cessa en effet jamais de jouer un rôle de premier ordre sur la scène politique, militaire,
        commerciale et culturelle de la péninsule Ibérique. Depuis l''époque romaine, Séville est omniprésente dans la vie de l''Espagne :
        point stratégique sur le Guadalquivir, ville de saint Isidore, centre culturel brillant d''al-Andalus,
        point d''orgue de la Reconquête, siège régulier de la cour sous Alphonse X de Castille et ses successeurs,
        plaque tournante du commerce avec les Amériques… Le riche patrimoine que la ville conserve est le témoignage tangible
        d''un passé prestigieux. wikipedia',
        'seville.jpg'
    ),
    (
        'Palerme',
        'Italie',
        'PMO',
        'IT',
        'Europe',
        '38.111227',
        '13.352443',
        '{"mer", "ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'L''histoire de Palerme débute à la préhistoire. La cité, déjà comptoir commercial,
        est créée vers 878 avant J.C par les Phéniciens, et devient à partir de la conquête arabe la capitale de la Sicile
        et elle connaît, tout au long de son histoire, de multiples conquérants d''origines très diverses :
        Carthaginois, Romains, Musulmans, Normands, Angevins, Aragonais, Espagnols.
        Rivale de Messine au Moyen Âge et à l''époque moderne, son sort comme celui de la Sicile est associé à celui
        du royaume de Naples dont elle essaie de s''extraire pour obtenir son indépendance et en 1861,
        elle rejoint le royaume d''Italie alors en formation.
        Depuis 1947, Palerme est le siège de la région autonome sicilienne. wikipedia',
        'palerme.jpg'
    ),
    (
        'Naples',
        'Italie',
        'NAP',
        'IT',
        'Europe',
        '40.835885',
        '14.248768',
        '{"ville", "nature", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"moyen", "grand"}',
        'Naples est fondée entre le Xie et le VIIIe siècle av. J.-C. de fermiers grecs puis successivement refondée comme Neapolis
        dans la zone basse vers - 500. Elle fait partie des principales villes de la Grande-Grèce.
        Au cours de son histoire, Naples voit se succéder de longues et nombreuses dominations étrangères.
        Après l''Empire romain, au viie siècle, la ville forme un duché autonome, indépendant de l''Empire byzantin.
        À partir du XIIIe siècle et pour environ six cents ans, elle est capitale du Royaume de Naples.
        Au début du XVe siècle, sous l''autorité du roi Ladislas Ier de Naples, une première tentative de réunification de l''Italie
        est menée et la ville devient, par la suite, le centre politique de l''Empire aragonien.
        Pour des facteurs historiques, artistiques et politiques, elle est, du Moyen Âge tardif jusqu''au Risorgimento,
        l''un des principaux centres culturels à l''égal des autres principales capitales du continent. wikipedia',
        'naples.jpg'
    ),
    (
        'Venise',
        'Italie',
        'TSF',
        'IT',
        'Europe',
        '45.437191',
        '12.33459',
        '{"Ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'L’histoire de Venise repose sur un paradoxe : quelques îlots du nord-ouest de l''Adriatique, cernés par la vase,
        ont permis l''érection de la capitale d''un empire maritime et commercial, qui fut le plus grand port du Moyen Âge
        après Constantinople, dont elle dépendit à ses débuts. Placée au fond du golfe le plus profond de la Méditerranée,
        en bordure de deux grands fleuves italiens, le Pô et l''Adige qui conduit au col du Brenner,
        passage le plus bas des Alpes, la ville émerge au IXe siècle.
        Elle bénéficie d''une situation privilégiée sur les routes d''échange avec le Saint-Empire romain germanique,
        l''empire byzantin et les empires musulmans. L''expansion prend forme au xive siècle,
        via la Bourse du Rialto en plein air, où on échange des parts de navire, ce qui facilite le développement d''une flotte
        commerciale et le quadruplement de la superficie de l''Arsenal de Venise, mené par les autorités de la ville.
        À partir du xvie siècle, le déclin politique et économique accompagne un intense rayonnement culturel.
        En 1797, Bonaparte met fin à son indépendance. La cité passe sous contrôle autrichien avant de rejoindre
        le royaume d''Italie en 1866. wikipedia',
        'venise.jpg'
    ),
    (
        'Rome',
        'Italie',
        'FCO',
        'IT',
        'Europe',
        '41.89332',
        '12.482932',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Selon la légende, Rome aurait été fondée par Romulus qui a donné à la ville son nom par la suite.
        Lui et son frère, Rémus, avaient projeté de fonder Rome près du Tibre à l''endroit où, bébés,
        ils avaient été abandonnés puis recueillis par la louve. Les deux frères ne furent pas d''accord sur le site exact
        où ils devaient bâtir Rome. Les deux frères montèrent chacun sur une montagne et attendirent un signe des divinités
        et tout deux virent des corbeaux un avant l''autre mais un de plus que l''autre et c''est là qu''une dispute éclata
        entre eux ; ils combattirent et Rémus fut tué. Romulus fonda alors Rome.
        En fait une partie des sept collines de Rome est habitée par des bergers dès le début du Ier millénaire av. J.-C..
        Mais ce sont les conquérants étrusques qui en firent une ville au VIIIe siècle av. J.-C.',
        'rome.jpg'
    ),
    (
        'Florence',
        'Italie',
        'FLR',
        'IT',
        'Europe',
        '43.769871',
        '11.255576',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Florence a été fondée pendant l''époque romaine, en 59 av. J.-C., près du fleuve Arno.
        Elle n''a été qu''une simple bourgade jusqu''au XIIe siècle, début de son essor économique et artistique
        qui dura jusqu''au XVIe siècle. Florence est également le berceau de la langue italienne moderne,
        fondée sur l''œuvre de Dante. wikipedia',
        'florence2.jpg'
    ),
    (
        'Vienne',
        'Autriche',
        'VIE',
        'AT',
        'Europe',
        '48.208354',
        '16.372504',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Les Celtes, premiers colons de la région de Vienne, sont arrivés au Vème siècle avant J.-C.
        Au Ier siècle avant J.-C., les Romains incorporent la ville à leur Empire et la baptisent "Vindobona" ou "ville blanche".
        Pour défendre cette région, les Romains décident de construire une forteresse :
        la "Panonia". Vespasien la choisit comme siège de la Légion XIII et, en 213, Vindobona devient une municipalité.
        C''est ici que meurt l''empereur Marc Aurèle.
        Située sur le Danube, à limite naturelle avec l''Empire, Vienne est le théâtre de luttes incessantes
        entre les peuples germaniques. La paix est finalement atteinte au Vème siècle,
        lorsqu''elle tombe entre les mains des Avars.
        À la fin du VIIIème siècle, Charlemagne conquiert Panonia, l''annexe à son empire, et la rebaptise "le Royaume de l''Est".
        Ce fait est considéré comme la naissance de l''Autriche, bien que ce ne soit qu''en 996 que le pays se voit appelé
        "Autriche". visitonsvienne.com',
        'vienne.jpg'
    ),
    (
        'Hallstatt',
        'Autriche',
        'LNZ',
        'AT',
        'Europe',
        '47.56217',
        '13.64867',
        '{"montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'La culture de Hallstatt, ou culture hallstattienne, ou encore Hallstattien, est une culture archéologique
        du centre-ouest de l''Europe qui s''est développée entre environ 1200 et 500 av. J.-C.
        Elle précède la période de La Tène ou second âge du fer. Elle prend son origine au nord des Alpes sur la Tchéquie,
        la Bavière, et le nord de l''Autriche actuelles. Cette culture est généralement considérée par les historiens
        comme le berceau des peuples celtes.
        La culture de Hallstatt tire son nom d''un site archéologique qui se trouve à Hallstatt,
        dans la région du Salzkammergut, en Autriche. Le terme Hallstatt donne l''adjectif hallstattien(ne)
        et est abrégé en Ha (ou Hall) dans le jargon des spécialistes.
        Le nom de cette culture a été proposé par l''archéologue Hans Hildebrand en 1874. wikipedia',
        'hallstatt.jpg'
    ),
    (
        'Salzbourg',
        'Autriche',
        'SZG',
        'AT',
        'Europe',
        '47.798135',
        '13.046481',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Salzbourg, en allemand Salzburg est une ville autrichienne, capitale du Land de Salzbourg (520 000 habitants en 2003).
        Elle compte 154 211 habitants en 20191, constituant la quatrième ville la plus peuplée d''Autriche.
        La vieille ville est inscrite sur la liste du patrimoine mondial de l''UNESCO.
        Située à la frontière allemande, la ville est célèbre pour avoir vu naître Mozart.
        Le festival de musique classique de Salzbourg est l''un des plus prestigieux au monde. wikipedia',
        'salzbourg.jpg'
    ),
    (
        'Grossglockner',
        'Autriche',
        'ANT',
        'AT',
        'Europe',
        '47.074546',
        '12.693883',
        '{"montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "froid", "froid"}}',
        '{"moyen", "grand"}',
        'La Grossglockner Hochalpenstrasse est la route avec le plus haut col routier des Alpes en Autriche (2 504 m)
        reliant les provinces de Salzbourg et de Carinthie. En venant du nord, elle monte en pente régulière depuis Bruck
        sur le pont de la Salzach jusqu''au col du Hochtor, pour redescendre vers Heiligenblut et la vallée du Möll,
        toujours en pente assez douce. Le long du trajet de nombreux parkings sont aménagés pour permettre aux touristes
        de s''arrêter pour admirer le paysage, tels que le massif du Grossglockner et le glacier Pasterze.
        La route s''étend sur 47,8 km de Bruck, plus précisément de l''auberge Lukashansl, au nord de la Salzach, à Heiligenblut.
        wikipedia',
        'grossglockner.jpg'
    ),
    (
        'Grüner See',
        'Autriche',
        'GRZ',
        'AT',
        'Europe',
        '47.542262',
        '15.056658',
        '{"montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Le Grüner See (« lac vert ») est un lac de Styrie en Autriche, près du hameau de Tragöß dans la commune de Tragöss-Sankt Katharein.
        Le lac est entouré par les montagnes du massif du Hochschwab et ses forêts1.
        Il a la particularité de ne se remplir que pendant quelques semaines au moment de la fonte des neiges
        et de se vider en quelques jours. Le reste de l''année, c''est un parc naturel.
        Le nom du lac provient de son eau vert émeraude. Cette eau est propre et claire car elle est issue de la fonte des neiges
        des montagnes karstiques. Ainsi, selon la saison, la profondeur du lac est différente,
        allant de 1 ou 2 mètres à près de 12 mètres. Le lac était populaire parmi les plongeurs pour sa bonne visibilité.
        L''afflux de visiteurs mettant en péril l''écosystème, l''office du tourisme a décidé d''interdire toute activité nautique
        à compter du 1er janvier 2016. Malgré cette interdiction, le lac serait en danger de perdre sa couleur caractéristique.
        wikipedia',
        'gruner-see.jpg'
    ),
    (
        'Berlin',
        'Allemagne',
        'BER',
        'DE',
        'Europe',
        '52.518693',
        '13.399602',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'La ville de Berlin est mentionnée pour la première fois en 1230, il s''agissait alors d''une petite colonie de chasseurs et de pêcheurs.
        Sa population est restée relativement indépendante au cours du XIIIe et XIVe siècle.
        En 1415, la famille des Hohenzollern qui gouvernait l''État de Brandebourg - qui appartenait alors au Saint-Empire,
        s''est installée à Berlin et, quelques années plus tard, à la fin du XVe siècle,
        Berlin a été déclarée capitale du Brandebourg.
        Au cours du XVIe siècle, Berlin a connu les luttes un peu partout en Europe après la Réforme. berlin.fr',
        'berlin.jpg'
    ),
    (
        'Hambourg',
        'Allemagne',
        'HAM',
        'DE',
        'Europe',
        '53.550341',
        '10.000654',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Née d''un petit fort bâti sur l''Alster par Charlemagne (vers 810), Hambourg devint un siège épiscopal (831)
        puis archiépiscopal (834). Dévastée par les Normands (845) et les Obodrites (983),
        la ville devint cependant un centre commercial important. En 1188, Adolphe III, comte de Holstein,
        fit bâtir une ville portuaire neuve qui obtint de Frédéric Barberousse une charte et des privilèges de navigation (1189).
        En 1216, les deux villes fusionnèrent.
        Hambourg participa à la Hanse pour s''imposer grâce à elle sur les marchés étrangers et supplanta Lübeck au XVIe s.
        Elle adhéra à la Réforme en 1529. Elle possédait dès les xvie-xviie s.
        un réseau postal, un Code de commerce, une Bourse et une banque et elle établit une ligne de navigation directe
        avec l''Amérique. Elle ne cessa de se développer jusqu''à la Révolution et fut gravement atteinte par
        les guerres napoléoniennes. Elle obtint le statut de ville libre et souveraine dans la Confédération germanique (1815)
        et adhéra à l''Empire allemand en 1871. Hambourg fut déclaré port franc en 1881.
        La ville subit en juillet-août 1943 des bombardements qui firent 41 000 morts. larousse.fr',
        'hambourg.jpg'
    ),
    (
        'L’île de Rügen',
        'Allemagne',
        'GTI',
        'DE',
        'Europe',
        '54.422453',
        '13.331571',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'À la fin de l''ère glaciaire, il y a 14 000 ans, la remontée du niveau des eaux de la Baltique recouvrit une partie
        des côtes. Les points hauts formèrent un chapelet d''îles que des dépôts de sable relièrent entre elles
        en quelques siècles pour former l''île de Rügen.
        L''île compte désormais 570 km de côtes.Rügen (lat. Rugia) est la plus grande île allemande.
        Elle est située au large de la côte du Mecklembourg-Poméranie occidentale dans la mer Baltique.
        Sa superficie est de 926 km2 et sa population était de 73 000 habitants en 2001.
        Avec ses îles avoisinantes plus petites, Hiddensee et Ummanz, elle est administrée par l''arrondissement
        de Poméranie-Occidentale-Rügen.
        Les villes principales sont Bergen avec 20 000 habitants et la ville portuaire de Sassnitz avec 11 000 habitants.
        Au sud-est de l''île, se trouvent les trois stations balnéaires les plus connues, Binz, Sellin et Göhren. wikipedia',
        'rugen.jpg'
    ),
    (
        'Le Château de Neuschwanstein',
        'Allemagne',
        'FMM',
        'DE',
        'Europe',
        '47.557561',
        '10.749732',
        '{"nature", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Pour des millions de personnes à travers le monde, c''est un symbole rattaché à l''enfance :
        le château de la Belle au Bois Dormant, qui figurait autrefois sur le logo de Walt Disney Pictures,
        et est présent grandeur nature dans plusieurs parcs Disneyland.
        Edifié au XIXe siècle sur ordre du roi Louis II de Bavière, le château de Neuschwanstein,
        près de Füssen, en Bavière, est l''un des châteaux les plus célèbres sur Instagram et certainement
        le château le plus célèbre d''Allemagne : le "nouveau rocher du cygne"
        est visité chaque année par plus d''un million de touristes.
        Il est également considéré comme l''un des plus beaux châteaux du monde. geo.fr',
        'neuschwanstein.jpg'
    ),
    (
        'Cottbus',
        'Allemagne',
        'CBU',
        'DE',
        'Europe',
        '51.756745',
        '14.335731',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'La présence humaine date d''environ 2 000 ans : colons germaniques, tribus slaves, Lusitzi (Lusace),
        Wendes (Venedi), Talsandinsel. La ville est mentionnée pour la première fois dans une charte en 1156.
        Forteresse slave à l''origine, elle se développe comme cité marchande dès le XIIe siècle
        et est rattachée au Brandebourg au milieu du xve siècle. En 1468, puis en 1479, la ville et détruite par incendie.
        La peste, la guerre de Trente Ans, Wallenstein sont autant de fléaux pour la ville, jusqu''en 1648.
        L''édit de Potsdam (1685) de Frédéric-Guillaume Ier de Brandebourg permet l''émigration messine à Berlin
        à la suite de la révocation de l''édit de Nantes. L''arrivée de huguenots français permet un nouvel essor. wikipedia',
        'cottbus.jpg'
    ),
    (
        'Le lac de Königssee',
        'Allemagne',
        'MUC',
        'DE',
        'Europe',
        '47.555105',
        '12.976567',
        '{"montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Le Königssee est un lac alpin dans le Sud-Est de la Bavière, dans le Pays-de-Berchtesgaden,
        non loin de la commune de Schönau am Königssee. De forme rectangulaire,
        il est situé au pied du chaînon du Watzmann à la manière d''un fjord, entouré de hautes montagnes
        des Alpes de Berchtesgaden. Au sud du Königssee se trouve l''Obersee, qui est seulement de quelques mètres plus élevé.
        Pendant la dernière glaciation, ce lac profond s''est formé par les mouvements des glaciers et était retenu
        par un barrage naturel à son écoulement.
        La conservation de la beauté du lac et de sa rive sont à l''origine du parc national de Berchtesgaden
        qui englobe une grande partie. Le lac lui-même est administré par la Bayerische Schlösserverwaltung de l''État de Bavière.
        wikipedia',
        'konigssee.jpg'
    ),
    (
        'Athènes',
        'Grèce',
        'ATH',
        'GR',
        'Europe',
        '37.983941',
        '23.728305',
        '{"mer", "ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Athènes doit son nom à Athéna, déesse protectrice de la ville née de la tête de Zeus,
        dont l''histoire se confond avec celle de la Grèce.
        Les premiers habitants étaient issus de différentes ethnies ioniennes qui se sont installées à côté du rocher
        qui accueillera plus tard l''Acropole. Ces dernières étaient organisées en royaumes.
        Selon la mythologie Cécrops, d''origine égyptienne, fut le premier roi de la région de l''Attique
        et c''est à lui que la fondation d''Athènes est attribuée. Vers le Xe siècle av. J.-C.
        ses habitants se sont rassemblés en douze villes et dès le début, Athènes a montré sa suprématie sur le reste des polis.
        La légende attribue à Thésée l''unification des polis sous le contrôle d''Athènes,
        après avoir dominé sa principale concurrente, la polis voisine d''Éleusis.
        Après l''unification, la fête des Panathénées a été célébrée en l''honneur de la déesse d''Athènes.
        Au cours de l''histoire, Athènes est passée de la monarchie primitive à l''aristocratie pour ensuite devenir une démocratie. athenes.fr',
        'athenes.jpg'
    ),
    (
        'Thessalonique',
        'Grèce',
        'SKG',
        'GR',
        'Europe',
        '40.6403167',
        '22.9352716',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "chaud", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Thessalonique ou parfois Salonique  est la deuxième ville de Grèce (820 000 habitants en 2001),
        chef-lieu du nome du même nom, située au fond du golfe Thermaïque et de la périphérie (région) de Macédoine centrale.
        Elle est fondée par un synœcisme organisé par Cassandre de Macédoine en 315 av. J.-C.,
        qui la baptise en l''honneur de sa femme, Thessalonikè, fille de Philippe II de Macédoine.
        Grâce à sa localisation au croisement d''axes de communication,
        Thessalonique devient rapidement un centre commercial important.
        Son développement continue pendant la domination romaine, malgré le sac de la ville après la défaite
        de Persée de Macédoine à Pydna. Thessalonique profite de la création de la via Egnatia,
        la grande route transbalkanique méridionale. Une communauté cosmopolite de marchands s’y installe,
        faite de Juifs, d’Italiens et de Romains. wikipedia',
        'thessalonik.jpg'
    ),
    (
        'Rodhes',
        'Grèce',
        'RHO',
        'GR',
        'Europe',
        '36.4513819',
        '28.2241364',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"petit", "moyen"}',
        'Selon la mythologie, Zeus aurait fait émerger l’île de Rhodes des eaux pour l’offrir à Hélios, le dieu du soleil.
        Se promenant sur ses terres, Hélios rencontra la nymphe Roda (la rose) et ce sont trois de leurs petits-fils,
        Ialyssos, Kamiros et Lindos qui fondèrent les 3 premières citées de l’île.
        En réalité, l’île est d’abord occupée par une population préhellénique, puis est envahie par les Doriens
        vers 1100 av J.-C., probables fondateurs de ces trois villes anciennes, qui forment la base d’un actif commerce maritime.
        De par sa situation géographique et grâce au développement de sa flotte,
        Rhodes connaît un extraordinaire apogée comme centre commercial et artistique pendant toute la période archaïque (1000 – 490 av J.C.).
        Mais elle est aussi l’une des premières cibles des Perses lorsque ceux-ci attaquent les Grecs.
        En 471 av J.-C., Rhodes se rallie donc à la Confédération Athénienne, avant de se révolter,
        passant sous autorité de Sparte pendant la guerre du Péloponèse. C’est vers 408 av J.-C. qu’est fondée la capitale,
        la cité de Rhodes, selon les plans d’Hippodamos de Milet. rhodesvacances.fr',
        'rodhes.jpg'
    ),
    (
        'Santorin',
        'Grèce',
        'JTR',
        'GR',
        'Europe',
        '36.4071112',
        '25.4566637',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'Pendant l''antiquité, Santorini s''appelait Strongyli à cause de da forme ronde qui a changé après
        l''explosion du volcan en  1650  avant Jésus-Christ, et la partie centrale de l''île s''est englouti en formant Caldeira.
        Les Phéniciens l''appelaient Kallisti et les Doriens l''appelaient Thira.
        Elle a pris le nom Santorini au XIIème siècle par les Francs qui, à proprement parler, l''appelaient "Santa Irène",
        c''est à dire Sainte Eirini. L''explosion du volcan a été la raison principale (selon beaucoup de chercheurs)
        de l''arrêt de grand développement de l''île, puisque jusqu''à 2000 avant Jésus-Christ la Civilisation  Minoenne
        fleurissait.
        On dit que l''Égée entier s''est assombrit et les vagues ont mesuré 250 mètres et ont eu une vitesse de 300 km à l''heure,
        en détruisant par conséquent la civilisation de l''Égypt.
        Selon quelques théories mythologiques différentes cette destruction est associée à l''engloutissement de l''Atlantide.
        "Thira" s''est soumise aux Persans et plus tard elle s''est alliée avec Sparte et en 426 avant Jésus-Christ
        elle a été prise par les Athéniens. Ensuite, elle a été prise par le Ptoléméens et enfin par les Romans.
        Pendant la période byzantine, Thira faisait partie du Thème de l''Égée,
        pendant la période de l''occupation vénitienne elle faisait partie du Duché de Naxos et enfin
        elle a été prise par les Vénitiens. En ce temps-là beaucoup de résidents de l''île ont adhéré à la doctrine catholique.
        En 1537 l''île a été prise par les pirates de Barberousse et en 1579 par les Turcs.
        De 1770 jusqu''à 1774, l''île était sous l''occupation russe et en 1832 elle a été attachée à l''état Hellénique. e-kyklades.gr',
        'santorin.jpg'
    ),
    (
        'Dublin',
        'Irlande',
        'DBN',
        'IE',
        'Europe',
        '53.3497645',
        '-6.2602732',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Dublin est la plus grande ville de l''île d''Irlande et de l''État d''Irlande, dont elle est la capitale
        (Belfast étant la capitale de l''Irlande du Nord). La ville est située sur la côte orientale de l''île
        et au centre du comté de Dublin. Dublin est la plus grande ville d''Irlande en importance et
        en nombre d’habitants depuis le haut Moyen Âge. Elle est aujourd’hui classée à la soixante-sixième place dans l’index
        des places financières mondiales et a un des plus forts taux de développement parmi les capitales européennes.
        Dublin est le centre historique, politique, artistique, culturel, économique et industriel de l’Irlande. wikipedia',
        'dublin.jpg'
    ),
    (
        'Galway',
        'Irlande',
        'GWY',
        'IE',
        'Europe',
        '53.2744122',
        '-9.0490601',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'La ville est née à l’emplacement d’un village de pêcheurs, Claddagh, à l’embouchure de la rivière Corrib.
        Les anglo-normands s’emparèrent en 1232 de ce territoire appartenant aux O’Flaherty et y construisirent une citadelle
        et une ville fortifiée en 1270. Il est d’ailleurs possible que le nom gaélique de Galway (“Gaillim”)
        vienne du mot gaélique gaill qui signifie “étranger”. La ville est dirigée par 14 familles (ou tribus) de marchands
        après une charte accordée par Richard II en 1396, ce qui vaut encore aujourd’hui à Galway le surnom de “Cité des Tribus”.
        Pendant plusieurs siècles, la cité se développe grâce au commerce avec le Portugal et l’Espagne,
        tout en maintenant avec ses voisins irlandais des relations tumultueuses. La ville est détruite par Cromwell puis
        Guillaume d’Orange au 17ème siècle. La ville ne s’en remettra pas avant plusieurs siècles, renaissant de ses cendres
        dans les années 90 grâce à l’arrivée d’industries technologiques de pointe et au boom économique irlandais. terresceltes.net',
        'galway.jpg'
    ),
    (
        'Comté de Kerry',
        'Irlande',
        'KIR',
        'IE',
        'Europe',
        '52.1453345',
        '-9.5174011',
        '{"nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Le comté de Kerry (en irlandais : Contae Chiarraí), surnommé The Kingdom (« Le Royaume »),
        est un comté situé dans le Sud-Ouest de l''Irlande, entre le fleuve Shannon au nord et l''océan Atlantique à l''ouest.
        Il est délimité à l''est par le comté de Limerick et au sud à celui de Cork. Son nom vient de l''irlandais Chiarraí,
        qui signifie « gens de Ciar », en référence à une tribu celtique qui vivait dans cette région.
        Sa superficie est de 4 746 km2 pour 147 707 habitants en 2016. Il fait partie de la province historique de Munster.
        La péninsule de Dingle et l''anneau du Kerry, route panoramique de la péninsule de l''Iveragh,
        ont contribué à faire de cette région l''un des moteurs du tourisme irlandais.
        Elle est réputée pour la variété de ses paysages : landes, lagunes, côte déchiquetée et ponctuée d''îles,
        vallées couvertes de forêts de sapins, lacs, plages, etc.
        La Kerry Way est un site de randonnée renommé, avec ses 215 kilomètres de sentiers. wikipedia',
        'kerry.jpg'
    ),
    (
        'Cork',
        'Irlande',
        'ORK',
        'IE',
        'Europe',
        '51.897077',
        '-8.4654674',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Cork voit le jour autour d’un monastère fondé par Saint Finbarre au VIIème siècle.
        Après avoir régulièrement subi les attaques des Vikings, la ville devient au XIIème siècle la principale cité
        du royaume de Munster, jusqu’à ce qu’elle soit annexée par les anglais en 1185.
        La ville change alors régulièrement de main, enjeu régulier des batailles entre irlandais et anglais.
        Cork échappe aux foudres de Oliver Cromwell en acceptant ses armées, mais elle n’échappe pas à la répression des armées
        protestantes de Guillaume d’Orange quand la ville choisit le mauvais camp, celui de Jacques II le catholique,
        lors de la guerre civile anglaise en 1690. Après avoir prospéré au XVIIIème siècle,
        la ville est ravagée par la Grande Famine, perdant une grande partie de sa population, morts ou émigrés.
        Fortement rattachée à l’identité irlandaise, la ville est de tous les combats pour l’autonomie de l’Irlande.
        Elle est le refuge des activistes du Home Rule au XIXème siècle. Puis elle est une des villes les plus favorables à l’IRA,
        lors de la Guerre d’Indépendance de 1919 à 1922, ce qui lui vaudra d’ailleurs de subir les pillages des sinistres Black and Tans.
        Son maire, Terence Mac Swiney, emprisonné pour appartenance à l’IRA, décède même en prison après une grève de la faim en 1921.
        Ravagée économiquement dans les années 80 après la fermeture des usines Ford, Dunlop et des chantiers navals,
        la ville renaît économiquement depuis quelques années, grâce à l’installation de grandes sociétés américaines comme Apple,
        attirées par les avantages fiscaux offerts par le gouvernement irlandais. La vitalité économique de la ville saute aujourd’hui aux yeux,
        rendant à nouveau sa fièreté à la ville de Cork. terresceltes.net',
        'cork.jpg'
    ),
    (
        'Bleik',
        'Norvège',
        'ANX',
        'NO',
        'Europe',
        '69.2729772',
        '15.9594706',
        '{"mer", "montagne", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "froid", "froid"}}',
        '{"moyen", "grand"}',
        'Bleik est un village de pêcheurs de la municipalité d''Andøy, dans le comté de Nordland, en Norvège.
        Le village est situé dans la partie nord-ouest de l''île d''Andøya, à environ 10 kilomètres au sud-ouest
        du village d''Andenes.
        Le village de 0,38 kilomètre carré (94 acres) a une population (2018) de 461,
        ce qui donne au village une densité de population de 1213 habitants par kilomètre carré (3140 / sq mi).
        L''île en forme de triangle au large de la côte s''appelle Bleiksøya.
        Cette île est la plus grande station balnéaire de macareux de toute la Norvège.
        Le lac Bleiksvatnet se trouve juste au sud du village. Bleik possède l''une des plus longues plages de Norvège,
        et on dit que la plage est à l''origine du nom du village. La plage est blanche et bleik signifie blanc/pâle en norvégien.
        Dans le village, il y a une écurie, une école et une épicerie. Des informations touristiques, un safari de macareux,
        un camping et un pub sont également disponibles.[4] Bleik est également connu pour avoir nommé le canyon de Bleik,
        qui commence à environ 15 km au large de la plage de Bleik dans la mer de Norvège.
        Bleik Canyon est un canyon très profond avec des profondeurs allant jusqu''à 3.000 m et est la résidence des baleines
        et des calmars géants. C''est un point chaud populaire pour les safaris aux baleines en raison de la présence de cachalots. wikipedia',
        'bleik.jpg'
    ),
    (
        'Bergen',
        'Norvège',
        'BGO',
        'NO',
        'Europe',
        '60.3943055',
        '5.3259192',
        '{"ville", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"moyen", "grand"}',
        'Bergen est une ville du sud-ouest de la Norvège, capitale du comté de Hordaland.
        Elle est la deuxième ville du pays avec 278 121 habitants. C''est également une ville portuaire, universitaire et un évêché.
        La cité est divisée en huit bydeler (districts de la ville), équivalents administratifs de gros quartiers :
        Arna, Bergenhus, Fana, Fyllingsdalen, Laksevåg, Ytrebygda, Årstad et Åsane. Le centre-ville occupe le bydel de Bergenhus,
        c’est-à-dire la ville historique qui compte environ 35 000 habitants, les autres n''étant affiliées à la commune de Bergen
        qu''administrativement. Il convient aussi de signaler que beaucoup de Bergenois tiennent compte des anciennes appellations
        non administratives, les strøk, quartiers traditionnels qui ont hérité le plus souvent du nom du domaine agricole
        présent sur place auparavant. Bergen fait partie du district historique (non administratif) de Midhordland.
        La commune de Bergen est délimitée dans sa majeure partie par des fjords :
        le Sørfjord et le Byfjord au nord et le Raunefjord et le Grimstadfjord à l''ouest. wikipedia',
        'bergen.jpg'
    ),
    (
        'Stavenger',
        'Norvège',
        'SVG',
        'NO',
        'Europe',
        '58.97005',
        '5.73332',
        '{"montagne", "ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"moyen", "grand"}',
        'Avec des racines remontant au 12ème siècle, la 4ème plus grande ville de Norvège s’est maintes et maintes fois réinventée,
        passant d’un centre religieux à une industrie lourde à un centre culturel et culinaire de nos jours.
        Stavanger est au centre de l''industrie pétrolière norvégienne. C''est au milieu des années 1970 que le pétrole devint
        le premier secteur d''activité de la région. Equinor, la compagnie pétrolière Norvégienne détenue à 62,5 % par l''État
        y possède un de ses principaux centres de recherche. norway.mw',
        'stavanger.jpg'
    ),
    (
        'Oslo',
        'Norvège',
        'OSL',
        'NO',
        'Europe',
        '59.9133301',
        '10.7389701',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Le nom Oslo provient de deux mots du vieux norrois : ás, divinité, et lo, prairie. Il peut se traduire par
        “champ des dieux”.
        La ville fut fondée en 1049 par le roi Harald Hardråde (dit le Sévère), dont le fils Olav Kyrre (dit le Tranquille)
        construisit une cathédrale et établit un évêché. À la fin du XIIIe siècle, le roi Haakon V instaura une présence militaire
        en la forteresse Akershus (Akershus Festning ), dans l’espoir de contrecarrer la menace suédoise à l’est.
        Après que l’épidémie de peste bubonique eut décimé la moitié de sa population au milieu du XIVe siècle,
        la Norvège s’allia au Danemark et, de 1397 à 1624, Copenhague géra la politique et la défense norvégiennes.
        Oslo sombra dans l’oubli, avant d’être dévastée par un incendie en 1624. Le roi Christian IV la fit rebâtir sur un site
        mieux protégé et la baptisa Christiania en son honneur.
        Pendant trois siècles, la cité fut un bastion défensif. En 1814, les auteurs de la première Constitution norvégienne
        en firent la capitale officielle du nouveau royaume. Leurs efforts furent anéantis par la Suède,
        qui unifia les deux pays sous sa domination. En 1905, après la dissolution de cette union,
        Christiania commença à prospérer en tant que capitale de la Norvège moderne. La ville reprit son nom d’origine, Oslo, en 1925. lonelyplanet.fr',
        'oslo.jpg'
    ),
    (
        'Londres',
        'Royaume-Uni',
        'LON',
        'GB',
        'Europe',
        '51.5073219',
        '-0.127647',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'La ville n''a été édifiée qu''après la conquête romaine. La domination romaine a commencé au premier siècle après J-C
        et a pris fin au Vème siècle après J-C, lorsque s''est effondré l''empire.
        Au IIIème siècle, Londinium et son port abritaient une population plus importante, comptant quelques 500 000 habitants.
        Ruinée par les invasions anglo-saxonnes au Vème siècle, c''est au VIIème siècle que la ville est devenue le siège épiscopal
        et la capitale du petit royaume d''Essex.
        Les incursions scandinaves au IXème siècle ont entraîné l''implantation des colons danois dans le voisinage,
        ce qui a finalement encouragé l''esprit entrepreneurial et le sens du commerce dans la zone,
        devenant ainsi le premier centre urbain du pays. Sa richesse attira les rois scandinaves et danois qui assiégèrent la ville
        et l''obligèrent à payer un tribut.
        Depuis 1067, la ville a exercé les mêmes droits qu''un comté, ne dépendant que de l''autorité royale.
        La Tour de Londres remonte à cette époque.
        En 1191, la ville s''est constituée telle une municipalité ("corporation") en remplaçant le « portreeve »
        par la fonction de maire. En 1215, Londres a eu le privilège d''élire son maire chaque année.
        Pendant longtemps, l''Angleterre n''a pas possédé pas de capitale fixe. À partir du XIIIème siècle, Westminster,
        ville proche de Londres, est devenue l''un des principaux sièges du Gouvernement.
        L''essor du commerce européen a également fortement aidé Londres à être propulsée au rang de capitale du royaume. londres.fr',
        'londres.jpg'
    ),
    (
        'Bristol',
        'Royaume-Uni',
        'BRS',
        'GB',
        'Europe',
        '51.4538022',
        '-2.5972985',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Située dans le sud-ouest de l''Angleterre, Bristol était non seulement l''un des ports commerciaux les plus achalandés
        du pays, mais aussi l''une des collectivités les plus riches du comté de Somerset pendant le Moyen Âge tardif.
        Ce port a joué un rôle vital sur le cours des événements ayant mené Jean Cabot à découvrir les « terres neuves »
        (“new founde landes”). Quels sont les facteurs déterminants qui ont fait de Bristol un port aussi important et stratégique
        du 15e siècle en cette époque où l''Angleterre était considérée comme une puissance secondaire en Europe?
        Et pourquoi Cabot a-t-il porté son choix sur Bristol plutôt que sur des ports italiens ou espagnols considérés comme plus
        importants? Même si le port de Bristol aurait probablement poursuivi son expansion après la fin du Moyen Âge,
        ce sont les exploits de Cabot qui ont incité d''autres explorateurs à entreprendre des expéditions similaires,
        lesquelles ont permis d''assurer la pérennité du nom de cette ville à travers l''histoire. heritage.nf.ca',
        'bristol.jpg'
    ),
    (
        'Nottingham',
        'Royaume-Uni',
        'EMA',
        'GB',
        'Europe',
        '52.9534193',
        '-1.1496461',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Nottingham est l’une des rares grandes villes industrielles de Grande-Bretagne à avoir un passé médiéval
        et un passé pré-industriel important. Nottingham est connu pour la légende de Robin des Bois,
        et pour son industrie textile, en particulier sa production dentellière.
        Dans le cadre des célébrations du Jubilé de diamant de la reine Victoria, en 1897, Nottingham a obtenu
        une charte municipale et le titre de Cité. Elle s’intitule depuis officiellement Ville de Nottingham ou « City of Nottingham ».
        Elle a également le statut d''Autorité unitaire.
        Nottingham est membre du groupe des villes anglaises fondamentales ou « English Core Cities Group ».
        Centre de la région de les Midlands de l''Est, Nottingham a toujours une solide assise industrielle comprenant
        de nombreuses firmes mondialement connues comme les laboratoires pharmaceutiques Boots,
        les cycles Raleigh et les cigarettes John Player. wikipedia',
        'nottingham.jpg'
    ),
    (
        'Edimbourg',
        'Royaume-Uni',
        'EDI',
        'GB',
        'Europe',
        '55.9533456',
        '-3.1883749',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"petit", "moyen"}',
        'Elle est sa capitale depuis 1532, ainsi que le siège du Parlement écossais depuis le rétablissement de celui-ci en 1999.
        Sa population était de 488 050 habitants en 2016 (c’est la deuxième ville d’Écosse derrière Glasgow).
        Elle est dominée par son château dont les fondations remontent au viie siècle mais c’est à partir du XIe siècle
        que fut construite cette résidence royale avant de devenir une forteresse redoutable au xvie siècle.
        Édimbourg fut affranchie en 1329 et s’entoura de murailles au xve siècle. Après la défaite de Flodden (1513) contre les Anglais,
        les bourgeois de la ville décidèrent de construire à titre préventif une seconde enceinte baptisée le mur de Flodden.
        Après l’unification des Parlements d’Écosse et d’Angleterre (1707), la ville perdit de son importance politique
        mais resta un important centre économique et culturel. wikipedia',
        'edimbourg.jpg'
    ),
    (
        'Moscou',
        'Russie',
        'BKA',
        'RU',
        'Europe',
        '55.7504461',
        '37.6174943',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "chaud", "froid"}}',
        '{"moyen", "grand"}',
        'Ancienne colonie mongole, Moscou est une ville pleine d''histoire qui, au fil des ans, est devenue l''une des villes
        les plus riches culturellement en Europe, ainsi que l''une des capitales les plus peuplées du monde.
        Le nom de la ville vient de la rivière qui la traverse : Moscova, Moskva en ancien russe.
        L''histoire de Moscou, aujourd''hui capitale de la Russie, commence avec des peuplements préhistoriques.
        De petite ville au XIe siècle, elle grossit pendant la période mongole et devient le centre d''une principauté au XIVe siècle.
        Elle devient capitale de la Russie en 1480 et perd cette position en faveur de Saint-Pétersbourg fondée en 1712.
        Le siège du gouvernement revient à Moscou en 1918 après la révolution russe. wikipedia',
        'moscou.jpg'
    ),
    (
        'Saint-Pétersbourg',
        'Russie',
        'LED',
        'RU',
        'Europe',
        '59.938732',
        '30.316229',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"moyen", "grand"}',
        'Saint-Pétersbourg fut fondée en 1703 par le tsar Pierre Ier, qui en fit la capitale de son empire.
        La ville s''est appelé Pétrograd entre 1914 et 1924. A la mort de Lénine, elle fut renommée Léningrad,
        et après la disparition de l''URSS, elle retrouva le nom de Saint-Pétersbourg.
        Par son urbanisme résolument moderne et son esthétique d''origine étrangère, la nouvelle ville devait permettre à la Russie
        d’« ouvrir une fenêtre sur l''Europe » et contribuer, selon le souhait du tsar, à hisser la Russie au rang des grandes puissances
        européennes. Le centre-ville, construit sur des directives des souverains russes, présente une architecture unique
        qui mélange des styles architecturaux (baroque, néo-classique) adaptés de manière originale par des architectes
        souvent d''origine italienne. Ses canaux et ses rivières bordés de palais lui valent le surnom de « Venise de la Baltique »,
        tandis que ses colonnades ou son « ordonnancement de perspectives, de palais, de bâtiments, de parcs et d''avenues »
        celui de « Palmyre du Nord ». La ville est inscrite sur la liste du patrimoine mondial de l''UNESCO depuis 1990. wikipedia',
        'st-petersbourg.jpg'
    ),
    (
        'Rio-de-Janeiro',
        'Brésil',
        'RIO',
        'BR',
        'Amérique du Sud',
        '-22.9110137',
        '-43.2093727',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'Le site fut découvert le 1er janvier 1502 par les Portugais qui s''imaginaient à l''embouchure d''un grand fleuve, 
        d''où le nom Rio de Janeiro : « rivière de Janvier ». En 1555, ce sont les Français qui s''y installèrent, avant d''être chassés par les Portugais 
        quelques années plus tard. Port militaire et négrier, son essor repose d''abord sur le commerce et l''exportation de l''or du Minas Gerais.
        Rio de Janeiro, souvent désignée simplement sous le nom de Rio, est la deuxième plus grande ville du Brésil après São Paulo. 
        Située dans le Sud-Est du pays, elle est la capitale de l''État de Rio de Janeiro. Avec ses 6,1 millions d''habitants intra-muros 
        (communément appelés Cariocas, la variante Carioques existant aussi en français) et 12,62 millions dans l''aire urbaine, 
        Rio de Janeiro est l''une des métropoles les plus importantes du continent américain. wikipedia.org',
        'rio.jpg'
    ),
    (
        'Sao-Paulo',
        'Brésil',
        'SAO',
        'BR',
        'Amérique du Sud',
        '-23.5506507',
        '-46.6333824',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'São Paulo est une ville du Sud-Est du Brésil. Fondée en 1554 par des jésuites portugais, la ville s''est développée grâce à l''or des mines environnantes jusqu''à la fin du XVIII e siècle, 
        puis a connu la prospérité grâce à la culture du café et du sucre. 
        c''est la plus grande ville du Brésil et d''Amérique du Sud. C''est également la ville qui compte le plus de lusophones au monde. 
        La région métropolitaine de São Paulo est l''une des plus peuplées du continent américain, avec celles de Mexico et New York, et la cinquième au monde. 
        Capitale de l''État de São Paulo et principal centre financier, commercial et industriel de l''Amérique latine, elle est de fait la capitale économique du Brésil. wikipedia.org',
        'sao-paulo.jpg'
    ),
    (
        'Iguazú',
        'Brésil',
        'IGR',
        'BR',
        'Amérique du Sud',
        '-25.6233038',
        '-54.4771231',
        '{"nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'Les chutes d''Iguazú, situées au milieu de la forêt tropicale, à la frontière entre l''Argentine (80 %) et le Brésil (20 %), 
        sont des chutes d''eau constituant un site naturel inscrit au patrimoine mondial par l''UNESCO en 1984. 
        La première description du site par un Européen a été effectuée par Álvar Núñez Cabeza de Vaca au XVIe siècle.
        A l''origine de cet endroit extraordinaire, une faille géologique dans le lit du Río Paraná qui, il y a 200.000 ans, 
        a donné vie à une cascade vertigineuse, la Garganta del Diablo, la Gorge du diable. Et sur le lit du Río Iguazú, 
        deux grands arcs de 2.700 m se sont formés, formant quelques 300 chutes d''eau. wikipedia.org',
        'iguacu.jpg'
    ),
    (
        'Lima',
        'Pérou',
        'LIM',
        'PE',
        'Amérique du Sud',
        '-12.0621065',
        '-77.0365256',
        '{"ville", "mer", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "tempéré", "tempéré"}}',
        '{"moyen", "grand"}',
        'Lima est fondée le 18 janvier 1535 par le conquistador espagnol Francisco Pizarro. Sous le nom de « la Ciudad de los Reyes » (« la Cité des Rois »), 
        elle devient la capitale et la ville principale de la vice-royauté du Pérou, puis celle de la République, 
        après l''indépendance du pays vis-à-vis de l''Espagne en 1821 . 
        Au milieu de la façade maritime du Pérou sur l''océan Pacifique, Lima s''étend sur les vallées de trois fleuves : Rímac, Chillón et Lurín. 
        Avec une agglomération d’environ dix millions d’habitants, Lima est la cinquième plus grande ville d''Amérique latine, derrière Mexico, São Paulo, 
        Buenos Aires et Rio de Janeiro. Ses habitants s''appellent les Liméniens et Liméniennes. wikipedia.org',
        'lima.jpg'
    ),
    (
        'Cuzco',
        'Pérou',
        'CUZ',
        'PE',
        'Amérique du Sud',
        '-13.5170887',
        '-71.9785356',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "froid", "froid", "tempéré"}}',
        '{"moyen", "grand"}',
        'En 1532, à Cajamarca, au nord du Pérou ­actuel, ils avaient écrasé les troupes du chef inca Atahualpa. 
        Fait prisonnier, celui-ci proposa au conquistador Francisco Pizarro de remplir une pièce entière d’or et d’argent en échange de sa liberté. 
        Trois Espagnols partirent alors avec des hommes d’Atahualpa jusqu’à Cuzco, la capitale inca, à 2000 kilomètres au sud, pour prélever la rançon. 
        Aucun étranger n’y avait jamais mis les pieds. Leur visite, dans une atmosphère tendue, fut brève. Mais ce qu’ils découvrirent, 
        dans cette large vallée perchée au milieu des Andes, à 3 400 mètres d’altitude, les éblouit et les effraya à la fois.
        Notamment le temple du Soleil, site le plus sacré de la civilisation inca, qui se dressait au cœur de la ville. 
        Les murs y étaient couverts de plaques d’or, tout comme l’autel et la fontaine. Même des tiges de maïs et des statues de lamas étaient façonnés du précieux métal. 
        Dans l’une des pièces du complexe, les trois Occidentaux tombèrent aussi sur une scène macabre: les cadavres momifiés des anciens chefs incas, 
        en position assise, mains croisées sur la poitrine, auxquels les autochtones semblaient vouer un culte. geo.fr',
        'cusco.jpg'
    ),
    (
        'Machu-Picchu',
        'Pérou',
        'MFT',
        'PE',
        'Amérique du Sud',
        '-13.164422',
        '-72.5450851',
        '{"montagne", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "tempéré", "tempéré"}}',
        '{"moyen", "grand"}',
        'Le Machu Picchu est une citadelle inca installée en hauteur, dans les montagnes des Andes, au Pérou, au-dessus de la vallée de la rivière Urubamba. 
        Construite au XVe siècle et abandonnée par la suite, elle est réputée pour ses murs en pierres sèches dont la conception sophistiquée associe 
        des blocs immenses sans mortier, le tout formant des bâtiments fascinants qui tirent parti des alignements astronomiques et offrent une vue panoramique. 
        La raison précise de sa création demeure un mystère.
        Selon des documents du xvie siècle, trouvés par l''archéologue américain Hiram Bingham, professeur assistant d''histoire de l''Amérique latine 
        à l’université Yale, Machu Picchu aurait dû être une des résidences de l’empereur Pachacútec. Cependant, quelques-unes des plus grandes constructions 
        et le caractère cérémonial de la principale voie d’accès au llaqta démontreraient que le lieu fut utilisé comme un sanctuaire religieux. 
        Les deux usages ne s’excluent pas forcément. En revanche, les experts ont écarté l’idée d’un ouvrage militaire. wikipedia.org',
        'machu-picchu.jpg'
    ),
    (
        'Quito',
        'Equateur',
        'UIO',
        'EC',
        'Amérique du Sud',
        '-0.2201641',
        '-78.5123274',
        '{"ville", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "tempéré", "tempéré"}}',
        '{"moyen", "grand"}',
        'Quito (officiellement San Francisco de Quito) est la capitale et la ville plus peuplée de l''Équateur et de la province de Pichincha. 
        Le Grand Quito du District métropolitain comptait environ 3,1 millions d''habitants en 2018 et continue de s''accroître rapidement. 
        La ville s''étend du nord au sud sur 50 km de longueur, à une altitude de 2 800 m, sur les flancs du volcan Guagua Pichincha. 
        Son nom vient des tribus Quitus qui précédèrent les Caras. Le mot Quito veut aussi dire en langues archaïques, « le centre du monde ». 
        Quito était devenue une importante cité inca à l''arrivée des Espagnols, en 1526 (Les Incas s''y étaient établis quelques 50 ans auparavant, 
        dans une zone déjà habitée depuis presque 2500 ans). Rumiñahui, un général d''Atahualpa, 
        préféra raser la ville que l''abandonner aux conquistadors. Érigée sur les ruines de l''ancienne cité, la capitale actuelle fut fondée par 
        le lieutenant espagnol Sebastián de Benalcázar le 6 décembre 1534. wikipedia.org',
        'quito.jpg'
    ),
    (
        'Adelaïde',
        'Australie',
        'ADL',
        'AU',
        'Asie / Océanie',
        '-34.9281805',
        '138.5999312',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "tempéré", "tempéré", "chaud"}}',
        '{"grand"}',
        'La ville doit son nom à la reine Adélaïde, la reine consort épouse du roi Guillaume IV et elle fut créée en 1836 pour n''accueillir, 
        à la différence des autres colonies australiennes, que des Britanniques libres. Selon la légende, on dit que c''est le colonel William Light, 
        un des fondateurs de la ville, qui en conçut les plans et en choisit l''emplacement près du fleuve Torrens. 
        Suivant les conceptions de William Penn, Light conçut les plans d''une ville selon un maillage carré avec de larges boulevards et 
        de grands parcs publics, le tout entouré de vastes espaces verts. Ayant pratiqué très tôt la liberté religieuse, 
        la ville porte aujourd''hui le nom de « Ville des églises ». Adélaïde est surtout réputée pour ses nombreux festivals, 
        ses équipes sportives et ses vins. wikipedia.org',
        'adelaide.jpg'
    ),
    (
        'Cairns',
        'Australie',
        'CNS',
        'AU',
        'Asie / Océanie',
        '-16.9206657',
        '145.7721854',
        '{"ville", "mer", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"grand"}',
        'Fondée en 1876 et baptisée du nom du gouverneur du Queensland de l''époque, Sir William Wellington Cairns, 
        la ville sert de centre économique pour les chercheurs d''or de la Hodgkinson River, affluent de la Mitchell River. 
        Elle décline lorsqu''est découvert une nouvelle voie d''accès plus facile à la région à partir de Port Douglas. 
        À l''heure actuelle, la ville reprend de son importance en servant de point de départ pour les principaux produits de la région : minerais et sucre. 
        Cependant, Cairns est surtout une ville touristique de la côte est, possédant de nombreux atouts : la proximité de la Grande Barrière de corail, 
        à une heure et demie en bateau, de nombreuses îles — notamment l''île Verte et l''île Fitzroy — et de récifs, 
        ainsi que l''accès à la forêt pluviale tropicale du Queensland. wikipedia.org',
        'cairns.jpg'
    ),
    (
        'Sydney',
        'Australie',
        'SYD',
        'AU',
        'Asie / Océanie',
        '-33.8698439',
        '151.2082848',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "tempéré", "tempéré", "chaud"}}',
        '{"grand"}',
        'Sydney est la ville la plus peuplée d''Australie et du continent océanien, ainsi que la capitale de l''État de Nouvelle-Galles du Sud. 
        L''histoire de Sydney remonte aux temps préhistoriques. Les Aborigènes d''Australie ne connaissant pas l''écriture, toute la période où 
        ils étaient les seuls habitants du continent australien est classée dans la Préhistoire du continent. 
        Les premières présences humaines sur le continent australien remonte de 40 000 à 60 000 ans -suivant les différents chercheurs- avant notre ère. 
        À cette époque, huit détroits séparaient Java et l''Australie. Les premières personnes durent donc arriver en bateau au nord d''Australie, 
        découvrant un horizon inconnu. Les colons se sont ensuite déplacés progressivement vers le sud et, par la suite, sont arrivés à Sydney. 
        Il y a environ 13 000 ans, à la fin de la période glaciaire, la Nouvelle-Guinée et la Tasmanie se sont séparées du reste du continent 
        et les Aborigènes d''Australie ont commencé une longue période d''isolement, coupée de toute influence extérieure. wikipedia.org',
        'sydney.jpg'
    ),
    (
        'Hobart',
        'Australie',
        'HBA',
        'AU',
        'Asie / Océanie',
        '-42.8825088',
        '147.3281233',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "froid", "tempéré"}}',
        '{"grand"}',
        'Hobart est une ville du sud-est de l''Australie située au bord de la Derwent River débouchant sur les océans Indien et Pacifique, 
        capitale de la Tasmanie. Située dans le sud de l''État de Tasmanie, Hobart est en 2020 la ville la plus peuplée de cet État 
        et douzième d''Australie avec 222 569 habitants. 
        Les premiers habitants de la Tasmanie étaient les Aborigènes de Tasmanie, depuis environ 35 000 ans. 
        Le premier Européen à apercevoir l''île fut le Néerlandais Abel Tasman en 1642. La première colonie fut établie par les Britanniques 
        sur la Derwent River en 1803 et en 1901, la Tasmanie devenu le seul État insulaire de la fédération australienne. wikipedia.org',
        'hobart.jpg'
    ),
    (
        'Melbourne',
        'Australie',
        'MEL',
        'AU',
        'Asie / Océanie',
        '-37.8142176',
        '144.9631608',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "tempéré", "froid", "tempéré"}}',
        '{"grand"}',
        'La ville a été fondée en 1835. Elle a reçu un plan hippodamien (avec des rues à angles droits) en 1837. Quand l''État de Victoria a été créé en 1851, 
        Melbourne a été choisie comme sa capitale. Elle est s''est agrandie considérablement grâce à la ruée vers l''or de la deuxième moitié du siècle. wikidia.org',
        'melbourne.jpg'
    ),
    (
        'Whitsundays',
        'Australie',
        'WSY',
        'AU',
        'Asie / Océanie',
        '-20.310115',
        '149.0067231',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "froid", "froid", "chaud"}}',
        '{"grand"}',
        'Whitsunday, en Anglais, est un synonyme pour Pentecost, autrement dit, en français, le jour de la Pentecôte. 
        Le mot vient de l''anglo-saxon Hwita Sunnandæg (« White Sunday »). Les îles Whitsunday ont été ainsi baptisées par le capitaine britannique James Cook 
        en juin 1770. En effet, lorsqu''il découvrit ces îles paradisiaques, il pensait que c''était le jour de la Pentecôte. 
        Aujourd''hui, on admet qu''il ne s''agissait pas réellement du jour de la Pentecôte, puisqu''il n''a pas pris en compte la Ligne de changement de date, 
        qui n''existait pas encore!. wikipedia.org',
        'whitsundays.jpg'
    ),
    (
        'Tokyo',
        'Japon',
        'TYO',
        'JP',
        'Asie / Océanie',
        '35.6828387',
        '139.7594549',
        '{"ville", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Tokyo, (litt. « Capitale de l''est »), anciennement Edo, est de facto la capitale actuelle du Japon. Elle est la plus peuplée des préfectures du Japon, 
        avec plus de 13 831 421 habitants intra-muros en 2018 et 42 794 714 dans l''agglomération, et forme l''aire urbaine la plus peuplée au monde. 
        Située sur la côte est de l''île principale de l''archipel japonais, Honshū, Tokyo est l''une des quarante-sept préfectures du Japon. 
        Principal centre politique de l''archipel depuis le XVIIe siècle, la ville accueille la plupart des institutions du pays : 
        la résidence principale de l''empereur du Japon, du Premier ministre, le siège de la Diète (le parlement japonais), du Cabinet, 
        les ministères qui le constituent ainsi que toutes les ambassades étrangères. wikipedia.org',
        'tokyo.jpg'
    ),
    (
        'Kyoto',
        'Japon',
        'UKY',
        'JP',
        'Asie / Océanie',
        '35.021041',
        '135.7556075',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Kyoto (littéralement « ville capitale ») est une ville japonaise de la région du Kansai, au centre de Honshū. 
        Elle fut de 794 à 1868 la capitale impériale du Japon, sous le nom de Heian-kyō (« Capitale de la paix et de la tranquillité »). 
        Elle est aujourd''hui, avec ses palais impériaux, ses milliers de sanctuaires shinto et de temples bouddhistes, le cœur culturel et religieux du pays. 
        La ville est aussi la capitale de la préfecture de Kyoto ainsi que l''une des grandes villes de la zone métropolitaine Keihanshin (Osaka-Kobe-Kyoto). 
        Sa population est de 1,46 million d''habitants (estimations 2020). wikipedia.org',
        'kyoto.jpg'
    ),
    (
        'Nagoya',
        'Japon',
        'NGO',
        'JP',
        'Asie / Océanie',
        '35.1851045',
        '136.8998438',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Le destin de la capitale du Chûbu est étroitement lié à celui d''une figure-clé de l''histoire japonaise : Ieyasu Tokugawa, 
        le premier shôgun d''une longue dynastie. 
        Il décide notamment en 1601 de la construction de cinq routes reliant les grandes villes japonaises, 
        et fait de Nagoya une étape importante de la Minoji, une voie secondaire reliant la route du Tokaïdô - entre Tokyo, alors capitale politique, 
        et Kyoto, où vit l''empereur - à celle de Nakasendô. En 1610, le shôgun fait bâtir pour son septième fils, Yoshinao, 
        un château sur un promontoire du nord de la ville. Il devient vite un symbole à visiter à Nagoya, mais sera anéanti par les bombes américaines en 1945, 
        comme d''ailleurs une bonne partie de la ville. il faut savoir que la ville a subi de nombreux bombardements durant la Seconde Guerre Mondiale, 
        et a ainsi été reconstruite en grande partie après la guerre. C''est pourquoi les quartiers anciens, 
        temples et sanctuaires y sont moins nombreux que dans d''autres villes telles que Kyoto. japan-experience.com',
        'nagoya.jpg'
    ),
    (
        'Bangkok',
        'Thaïlande',
        'BKK',
        'TH',
        'Asie / Océanie',
        '13.7525438',
        '100.4934734',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'Cette dénomination de Bangkok provient d''un petit village de pêcheurs voisin : Ban Kok ou le "village des olives". 
        Ce village historique était une étape des marchands européens en chemin vers l''ancienne capitale d''Ayutthaya et l''Asie du Sud-Est. 
        Bangkok est donc devenue la capitale définitive du Siam. Au cours du XXème siècle, le pays a été renommé "Thaïlande". 
        Bangkok est une ville traversée par de nombreux canaux parce que la ville a été créée en imitant l''ancienne capitale Ayutthaya. 
        Cependant, aujourd''hui, beaucoup ont été éliminés pour améliorer le réseau routier. 
        La Thaïlande et Bangkok ont ​​une particularité singulière : elles n''ont jamais été colonisées par les puissances européennes ! 
        Profitant de la rivalité franco-britannique dans la région, le pays a favorisé le lien entre les pays de l''Asie du Sud-Est, 
        influencés par les Français (Indochine) et les Britanniques (Inde et Birmanie). bangkok.fr',
        'bangkok.jpg'
    ),
    (
        'Chiang-Mai',
        'Thaïlande',
        'CNX',
        'TH',
        'Asie / Océanie',
        '18.7882778',
        '98.9858802',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'Le Roi Mengrai a fondé Chiang Mai (signifiant « ville nouvelle »), surnommée la « Rose du Nord », le 12 avril 1296, 
        et elle a succédé à Chiang Rai comme capitale du royaume thaï de Lanna. Mengrai a construit un fossé et un mur autour de la ville 
        pour la protéger des incursions d''agresseurs venant de la Birmanie.
        C''est la sixième plus grande ville de Thaïlande (la deuxième en considérant l’agglomération de Bangkok comme une seule ville), 
        centre culturel et économique du Nord du pays et capitale de la province de Chiang Mai. La municipalité de Chiang Mai couvre Si Phra Singha, Ya Chang, Chang Chang, Wat Gate et Pa Tan. 
        Elle couvre également certaines parties de Chang Phuak, Suthep, Pung Sun, Nong Hoi, Tha Sala, Nong Pa Phuang et Fa Ha. wikipedia.org',
        'chiang-mai.jpg'
    ),
    (
        'Ko-Pha-Ngan',
        'Thaïlande',
        'USM',
        'TH',
        'Asie / Océanie',
        '9.7349503',
        '100.0305711',
        '{"mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'Ko Pha Ngan est une île du golfe de Thaïlande située au sud-est de la Thaïlande, juste à 15 km de l''île de Ko Samui, 
        45 km de l''île de Ko Tao et à environ 50 km des côtes. Elle appartient à la province de Surat Thani. Sa superficie est de 125 km2. 
        Koh Phangan est peuplée selon les dernières estimations par 13 500 habitants. L''île est une destination touristique principalement connue 
        pour ses magnifiques plages et sa nature. Le Parc national de Than Sadet-Ko Pha-Ngan (65.93 km2) protège tout le nord-est de l''île, 
        soit la moitié de l''île. Koh Phangan est également connue pour la célèbre Full Moon Party. Cette fête, à l''origine spirituelle avec la pleine Lune, 
        attire aujourd''hui des milliers de touristes par mois. wikipedia.org',
        'koh-phangan.jpg'
    ),
    (
        'Phuket',
        'Thaïlande',
        'HKT',
        'TH',
        'Asie / Océanie',
        '7.9366015',
        '98.3529292',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'L''histoire de l''île de Phuket remonte à l''an 1025 de notre ère. Ses premiers habitants furent les « Negrito », 
        les tribus des gitans de la mer et les nomades Mon, de la région de Pegu. A l''origine, elle était connue sous le nom de Junk Ceylon, 
        nom retrouvé sur des vieilles cartes de navigation portugaises.
        Elle est ensuite devenue Phuket, nom dérivé du mot malais « Bukit » qui signifie colline. Du VXème au XVIème siècle, 
        Phuket fut connue pour sa production d''étain et devint un centre de commerce et d''échanges pour les européens qui obtinrent 
        la permission d''y faire du commerce. wikitravel.org',
        'phuket.jpg'
    ),
    (
        'Pékin',
        'Chine',
        'BJS',
        'CN',
        'Asie / Océanie',
        '39.906217',
        '116.3912757',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Pékin (litt. « capitale du nord »), a une histoire vieille de près de 3000 ans, et a presque toujours été la capitale du pays lors des 700 dernières années. 
        Elle fut la capitale de six des plus grandes dynasties, dont les empires Yuan, Ming et Qing; les plus grands et les plus puissants des empires Chinois. 
        La situation géographique de Pékin est stratégique : elle se trouve au nord-est de la terre chinoise ancestrale, 
        entourée de montagnes qui la protègent de ses dangereux voisins, les Manchu et les Mongoles au nord. Elle est reliée au fleuve Yangtze par le Grand Canal, 
        un atout indispensable au bon développement de la ville. 
        Pékin n''a cessé de croître à travers l''histoire. De nos jours, elle est non seulement la capitale du pays, mais aussi la seconde plus grande ville de Chine ;
        le berceau principal de l''éducation et du développement en haute-technologie, ce qui lui vaut parfois le surnom de ''Silicone Vallée Chinoise''. voyageschine.com',
        'beijing.jpg'
    ),
    (
        'Sichuan',
        'Chine',
        'SIC',
        'CN',
        'Asie / Océanie',
        '30.5000001',
        '102.4999999',
        '{"nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "tempéré"}}',
        '{"grand"}',
        'Le Sichuan est une province de la république populaire de Chine, située dans la région sud-ouest du pays, dont le chef-lieu est Chengdu. 
        Selon l''Histoire chinoise, il est admis que le royaume des Shang (fin 15ème – fin 11ème siècles avant l''ère chrétienne) et celui qui lui a succédé, 
        le royaume des Zhou (fin 11ème siècle – 256 av. J. -C.), étaient les domaines les plus civilisés du monde chinois. wikipedia.org',
        'sichuan.jpg'
    ),
    (
        'Chengdu',
        'Chine',
        'HZU',
        'CN',
        'Asie / Océanie',
        '30.6598628',
        '104.0633717',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Sous la dynastie Han (-202 – 220), Chengdu devint un centre important de fabrication et de commerce de brocart, 
        grâce à un fonctionnaire du gouvernement, Jinguan, qui a développé l''artisanat du tissage et la culture de la soie. 
        Chengdu devient alors une étape très importante sur la Route de la Soie. 
        Chengdu, également appelée métaphoriquement Róngchéng (蓉城) « la ville des hibiscus », est la capitale de la province du Sichuan 
        en République populaire de Chine. Elle se trouve près de la limite avec le Tibet. Elle est avec Chongqing et Xi''an l''une des villes les plus peuplées 
        de la Chine intérieure. Son aire urbaine comptait en 2014 plus de 18 millions d''habitants. 
        Chengdu dispose du statut administratif de ville sous-provinciale. wikipedia.org',
        'chengdu.jpg'
    ),
    (
        'Katmandou',
        'Népal',
        'KTM',
        'NP',
        'Asie / Océanie',
        '27.708317',
        '85.3205817',
        '{"ville", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Katmandou, parfois appelée Kantipur du nom de l''ancienne cité-État, est la capitale politique et religieuse du Népal 
        dont elle est également la plus grande ville ainsi que le chef-lieu du district du même nom. 
        Les premiers habitants de Katmandou étaient des Newars et parlaient le nepâlbhâsa qui est une langue très répandue parmi les différentes communautés 
        ethniques résidant à Katmandou.
        La ville eut, en Europe, une période de grande célébrité. Dans les années 1960, elle était la destination favorite des hippies 
        qui faisaient la route de Katmandou. Selon les chroniques locales, la ville de Katmandou aurait été fondée au xe siècle par le roi Gunakamadeva. 
        La structure actuelle de la ville remonte au xvie siècle. wikipedia.org',
        'kathmandu.jpg'
    ),
    (
        'Pokhara',
        'Népal',
        'PKR',
        'NP',
        'Asie / Océanie',
        '28.209538',
        '83.991402',
        '{"nature", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "tempéré"}}',
        '{"grand"}',
        'La vallée de Pokhara est la seconde plus large vallée de la région montagneuse du Népal. S''étendant dans le district de Kaski, 
        dans l''Ouest du pays, elle se trouve à 203 km de la vallée de Katmandou1. Elle comprend notamment les villes de Pokhara et Leknath. 
        Pokhara est l''une des principales villes du Népal et la vallée est, comme celle de Katmandou, extrêmement sensible aux tremblements de terre 
        à cause de sa terre argileuse et de son potentiel de liquéfaction du sol. wikipedia.org',
        'pokhara.jpg'
    ),
    (
        'Durban',
        'Afrique du Sud',
        'DUR',
        'ZA',
        'Afrique',
        '-29.861825',
        '31.009909',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "tempéré", "chaud"}}',
        '{"grand"}',
        'Vasco de Gama reconnaît la côte orientale de l''Afrique en décembre 1497 et lui donne le nom de Natal. 
        Mais c''est seulement en 1824 qu''un petit groupe de commerçants anglais installe un comptoir à Port Natal, 
        seule baie accessible de ce littoral inhospitalier. En 1835, une ville est tracée près du port et prend un nom inspiré de celui du gouverneur du Cap, 
        D''Urban. Après une période difficile, l''intervention des troupes anglaises, en 1842, aboutit au rattachement du Natal à la colonie du Cap. 
        En 1854, la population ne s''élève encore qu''à 1 204 habitants. Le développement des mines d''or du Transvaal, 
        la construction de la voie ferrée jusqu''à Johannesburg commencée en 1886, la mise en valeur agricole du pays vont faire la fortune de Durban. universalis.fr',
        'durban.jpg'
    ),
    (
        'Johannesburg',
        'Afrique du Sud',
        'JNB',
        'ZA',
        'Afrique',
        '-26.205',
        '28.049722',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "tempéré", "froid", "tempéré"}}',
        '{"grand"}',
        'Johannesbourg est une métropole d''Afrique du Sud, fondée en 1886 au Transvaal. Elle est l''actuelle capitale de la province de Gauteng, 
        la plus riche du pays. L''agglomération de Johannesbourg-Pretoria se classe parmi les trente plus grandes régions métropolitaines du monde, 
        avec plus de douze millions d''habitants, et est l''une des six villes mondiales d''Afrique.
        L''histoire de Johannesburg est étroitement liée à l''or. En 1853, un prospecteur sud-africain trouve de l''or dans la rivière Juskei, 
        au nord du futur site de Johannesburg. Plusieurs petits filons sont ensuite exploités, mais ce n''est qu''en 1886 qu''est découvert 
        celui du Witwatersrand. En quelques mois, de nombreux prospecteurs affluent dans la région. Le gouvernement du Transvaal, 
        la petite République boer (du nom des descendants des premiers colons néerlandais) dont dépend le Witwatersrand, 
        décide alors d''inspecter les gisements aurifères et de déterminer le meilleur emplacement pour la nouvelle ville de Johannesburg. wikipedia.org',
        'johannesburg.jpg'
    ),
    (
        'Le-Caire',
        'Egypte',
        'CAI',
        'EG',
        'Afrique',
        '30.0443879',
        '31.2357257',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"moyen"}',
        'Le Caire est la capitale de l''Égypte. Avec une population d''environ dix millions d''habitants, et de plus de 21 millions pour l''agglomération, 
        elle est aussi la plus grande ville du pays et l''une des plus peuplées du continent africain. Selon une estimation de 2015, 
        elle serait également la sixième agglomération du monde. Bien qu''Al-Qāhira soit le nom officiel en arabe égyptien, elle est plus souvent appelée Masr 
        (le nom arabe égyptien de l''Égypte) ou el-Qahéra. A l''origine du Caire fut d''abord Fustât, la ville-camp établie au milieu du VIIe siècle 
        par les conquérants arabes. Puis, au milieu du Xe siècle, les Fatimides, dynastie chiite venue de Tunisie, fondèrent Qâhira. 
        Enfin, les Mamelouks couvrirent la ville de palais, de mosquées et de bâtiments grandioses, qui ne cessèrent de susciter l''admiration des voyageurs 
        occidentaux et arabes. wikipedia.org',
        'le-caire.jpg'
    ),
    (
        'Alexandrie',
        'Egypte',
        'ALY',
        'EG',
        'Afrique',
        '31.199004',
        '29.894378',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"moyen"}',
        'Alexandrie est une ville d''Égypte. En 2010, elle comptait plus de 4 300 000 habitantsb. Elle a été fondée par Alexandre le Grand en 331 avant notre ère. 
        Dans l’Antiquité, elle a été la capitale du pays, un grand centre de commerce (port d’Égypte) et un des plus grands foyers culturels hellénistiques 
        de la mer Méditerranée centré sur la fameuse bibliothèque, qui fonda sa notoriété. C''est actuellement la deuxième ville la plus peuplée du pays après Le Caire. 
        Surnommée le « comptoir du monde » par Strabon4, elle formait un pôle commercial majeur, aboutissant à la formation d''une population cosmopolite 
        de l''ordre d''un demi-million d''habitants, presque inégalée durant l''Antiquité5. De plus, la ville était la capitale du pouvoir lagide, 
        ce qui lui donnait un rôle de premier plan dans la gestion administrative de l’Égypte et dans l''histoire de la dynastie ptolémaïque. wikipedia.org',
        'alexandria.jpg'
    ),
    (
        'Fès',
        'Maroc',
        'FEZ',
        'MA',
        'Afrique',
        '34.0346534',
        '-5.0161926',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Fès ou Fez est une ville du Maroc septentrional, située à 180 km à l''est de Rabat, entre le massif du Rif et le Moyen Atlas. 
        Faisant partie des villes impériales du Maroc, elle a été à plusieurs époques la capitale du pays et est considérée de nos jours 
        comme sa capitale spirituelle. Sa fondation remonte à la fin du VIIIe siècle, sous le règne de Moulay Idriss Ier. 
        Son prestige passé en a fait l''un des foyers majeurs de la civilisation islamique relié à Bagdad, Damas, Cordoue, Le Caire, Kairouan, 
        Grenade, Palerme, Ispahan et Samarcande, avec lesquels elle avait établi des échanges aussi bien économiques que sociaux et culturels. wikipedia.org',
        'fes.jpg'
    ),
    (
        'Marrakech',
        'Maroc',
        'RAK',
        'MA',
        'Afrique',
        '31.6258257',
        '-7.9891608',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen"}',
        'Marrakech, est une ville située dans le centre du Maroc au pied des montagnes de l''Atlas. Marrakech est surnommée « la ville rouge » 
        ou la « ville ocre » en référence à la couleur rouge d''une grande partie de ses immeubles et ses maisons. 
        Marrakech et son aire urbaine comptent en 2020 un peu plus d''un million d''habitants. Par sa population, 
        la ville est la troisième agglomération du pays, à égalité avec sa rivale historique, Fès, et derrière Casablanca et Rabat. 
        Cité impériale, au même titre que Meknès, Fès et Rabat, Marrakech fut la capitale du Maroc pendant près de 350 ans, 
        sous les dynasties Almoravide (XIe–XIIe siècles), Almohade (XIIe–XIIIe siècles), Saâdienne (XVIe–XVIIe siècles), 
        ainsi que sous le règne de Mohammed ben Abdallah de l''actuelle dynastie alaouite (régnant de 1757 à 1790). wikipedia.org',
        'marrakech.jpg'
    ),
    (
        'Port-Louis',
        'Ile Maurice',
        '??',
        'MU',
        'Afrique',
        '-20.1624522',
        '57.5028044',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen"}',
        'Port-Louis est la capitale de Maurice. Située dans son propre district, peuplée de 149 194 habitants au recensement de 2015, 
        la ville est aussi un port ouvert sur l''Océan Indien et la plus grande ville du pays. Originellement, 
        la ville avait reçu des Hollandais le nom de Noordwester Haven traduit en Port Nord-Ouest par les colons français. 
        Le nom de Port-Louis a été donné en hommage au roi Louis XV à des dates qui divergent selon les sources. Certains citent l''année 1721 ou 1722, 
        d''autres font remonter ce second baptême à l''arrivée du gouverneur Mahé de la Bourdonnais en 1735. Sous la Révolution, 
        la ville reprit son nom de Port Nord-Ouest qu''elle alterna avec les noms de Port de la Montagne pour le port et Ville de la Montagne 
        pour la ville entre 1793 et 1795. En août 1806, avec l''avénement de l''Empire napoléonien, le gouverneur Decaen lui donna le nom de Port-Napoléon 
        qui fut conservé jusqu''à l''arrivée des Anglais en 1810 où elle reprit le nom de Port-Louis. wikipedia.org',
        'port-louis.jpg'
    ),
    (
        'Tel-Aviv',
        'Israel',
        'TLV',
        'IL',
        'Moyen-Orient',
        '32.0852997',
        '34.7818064',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Tel Aviv-Jaffa, est une ville située sur la côte méditerranéenne au cœur de la métropole du Gush Dan en Israël. 
        La ville moderne de Tel Aviv a été fondée en 1909 à l''époque ottomane dans les faubourgs de Jaffa, ville portuaire 
        avec laquelle elle a fusionné en 1950.La cité est surnommée « la ville sans interruption » en référence à son dynamisme et à sa population jeune, 
        ou encore « la bulle » pour son ambiance paisible et tolérante, relativement détachée du conservatisme moral ou des conflits entourant l''État d''Israël. wikipedia.org',
        'tel-aviv.jpg'
    ),
    (
        'Jérusalem',
        'Israel',
        'JRS',
        'IL',
        'Moyen-Orient',
        '31.7788242',
        '35.2257626',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Jérusalem, ou Salem, également nommée Hiérosolyme ou Solyme en ancien français est une ville du Proche-Orient, qui tient une place centrale 
        dans les religions juive, chrétienne et musulmane. Elle est aujourd''hui de facto la capitale d''Israël, et pour la partie Est 
        la capitale proclamée de l''État de Palestine.
        La ville s’étend sur 125,1 km2 pour une population de 966 346 habitants en janvier 20221. La ville, chef-lieu du district de Jérusalem, 
        est cosmopolite : s''y mêlent de nombreuses religions, peuples, groupes socio-économiques. La vieille ville, d''une superficie assez réduite 
        (moins de 1 km2), est historiquement composée de quatre quartiers avec : un quartier musulman, un quartier arménien, un quartier chrétien, 
        et un quartier juif. Ces quartiers sont entourés de remparts dont la partie visible aujourd''hui a été érigée entre 1535 et 1538.  wikipedia.org',
        'jerusalem.jpg'
    ),
    (
        'Amman',
        'Jordanie',
        'AMM',
        'JO',
        'Moyen-Orient',
        '31.9515694',
        '35.9239625',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"grand"}',
        'Amman est la capitale de la Jordanie depuis 1921. À l''époque romaine, elle est appelée Philadelphia et apparaît dans la Bible sous le nom de Rhabbat Ammon. 
        Elle est d''ailleurs l''une des plus vieilles villes du monde à être toujours habitée. Avec plus de 4 millions d''habitants en 2016, 
        elle est la plus grande ville de Jordanie, constituant le centre administratif et économique du pays. wikipedia.org',
        'amman.jpg'
    ),
    (
        'Istanbul',
        'Turquie',
        'IST',
        'TR',
        'Moyen-Orient',
        '41.0091982',
        '28.9662187',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"moyen", "grand"}',
        'Istanbul, appelé officiellement ainsi à partir de 1930 et historiquement Byzance et Constantinople, 
        est la plus grande ville et métropole de Turquie et la préfecture de la province homonyme, 
        dont elle représente environ 50 % de la superficie mais plus de 97 % de la population. Quatre zones historiques de la ville sont inscrites 
        sur la liste du patrimoine mondial de l''Unesco depuis 1985. Istanbul est le principal centre économique (pôle financier, commercial et industriel) 
        de la Turquie mais aussi la capitale culturelle du pays. wikipedia.org',
        'istanbul.jpg'
    ),
    (
        'Chamonix-Mont-Blanc',
        'France',
        'CHX',
        'FR',
        'Europe',
        '45.9246705',
        '6.8727506',
        '{"montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"moyen", "petit"}',
        'Après la parution des aventures de Windham et Pocock à la Mer de Glace, 
        nombreux de leurs compatriotes se sont rendus dans la Vallée de Chamonix-Mont-Blanc 
        pour admirer à leur tour, le plus long glacier de France. 
        A l’époque, l’ascension jusqu’à la Mer de Glace se fait à dos d’âne ! 
        En 1760, Horace Bénédict de Saussure offre une récompense à qui atteindra le mont Blanc. 
        Dix ans plus tard, il ouvre la première auberge pour accueillir les explorateurs curieux de côtoyer les sommets. chamonix.com',
        'chamonix.jpg'
    ),
    (
        'Tignes',
        'France',
        'TIG',
        'FR',
        'Europe',
        '45.4697293',
        '6.907594',
        '{"montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"moyen", "petit"}',
        'Achevé en 1952, le barrage de Tignes (Savoie) a donné naissance au lac du Chevril, 
        à l’issue d’un chantier colossal. Il a aussi noyé l’ancien village de Tignes, 
        malgré l’opposition de ses habitants. 
        Le barrage de Tignes (Savoie) est celui de tous les superlatifs. 
        C’est le plus haut barrage hydroélectrique de France, avec ses 180 mètres de hauteur. 
        Large de près de 300 mètres, il retient les 235 millions de mètres cubes d’eau du lac 
        artificiel du Chevril, en Tarentaise. 
        Son mur est orné d’une fresque, qui était la plus grande du monde à l’époque de sa création, 
        dans les années 1980. Intitulée Le Géant, elle représente Hercule, 
        symbole de force chez les Romains. 
        Fierté française de l’après-guerre, ce barrage cristallisa aussi une farouche opposition. leprogres.fr',
        'tignes.jpg'
    ),
    (
        'Reykjavik',
        'Islande',
        'REK',
        'IS',
        'Europe',
        '64.145981',
        '-21.9422367',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"moyen", "petit"}',
        'Reykjavik (littéralement « Baie-des-Fumées ») est la capitale de l''Islande. 
        Elle se situe à environ 250 km au sud du cercle polaire arctique, 
        ce qui en fait la capitale la plus septentrionale d''un État souverain 
        (la capitale du Groenland, Nuuk, étant située quelques kilomètres plus au nord). 
        Elle s''étale entre deux fjords, dans une zone comptant de nombreuses sources chaudes, 
        le long d''une baie (vík en islandais). 
        Elle est ainsi considérée comme la ville la « plus verte du monde » : on y compte environ 410 m2 d''espaces verts par habitant. 
        C''est la ville la plus peuplée du pays, avec environ 130 000 habitants. 
        Avec l''agglomération, elle regroupe pratiquement les deux tiers de la population de l''île, 
        soit environ 220 000 habitants. 
        Son emplacement se situe à l''endroit même où s''installent en 874 les premiers colons conduits par Ingólfur Arnarson. 
        Pourtant, le site n''est peuplé que de quelques centaines d''habitants en 1786 lorsqu''il est promu au rang de municipalité, 
        avant de devenir le siège des institutions religieuses et politiques de l''île, 
        à la faveur de la construction de l''État islandais. wikipedia.fr',
        'reykjavik.jpg'
    ),
    (
        'Chicago',
        'Etats-Unis',
        'CHI',
        'US',
        'Amérique du Nord',
        '41.8755616',
        '-87.6244212',
        '{"ville", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Chicago devient un gigantesque centre de transformation de matières premières, tant agricoles qu’industrielles. 
        Elle passe de 400 habitants en 1833 à... 300 000 en 1870 ! Aujourd’hui, avec près de 3 millions d’habitants, 
        et 9 millions banlieue comprise, Chicago est la 3e ville des États-Unis sur le plan démographique. 
        L’incendie géant de 1871 a donné le coup d’envoi à la modernisation de la ville en imposant d’autres normes 
        et matériaux de construction. En architecture, l’« école de Chicago » lance alors une petite révolution, 
        utilisant des matériaux modernes et durables tels que les poutrelles d’acier, le ciment et le fer forgé, 
        et surtout inventant des structures qui évitent la nécessité de façades porteuses. 
        La ville héberge alors une véritable tour de Babel. routard.com',
        'chicago.jpg'
    ),
    (
        'Honolulu',
        'Etats-Unis',
        'HNL',
        'US',
        'Amérique du Nord',
        '21.2890997',
        '-157.717299',
        '{"ville", "nature", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'En 1845, sur décision du roi Kamehameha III, Honolulu devint la capitale du Royaume d''Hawaï, 
        au détriment de la ville de Lahaina, située sur l''île de Maui (qui était capitale depuis 1820). 
        Lui et les rois qui l''ont suivi ont transformé Honolulu en une capitale moderne. 
        Honolulu restera siège du gouvernement provisoire d''Hawaï après la chute de la monarchie en 1893, 
        et deviendra capitale, d''abord de la République d''Hawaï en 1894, puis du Territoire d''Hawaï après l''annexion de l''archipel par les États-Unis en 1898 et enfin de l''État d''Hawaï 
        à la suite du référendum du 21 août 1959. 
        Des épisodes tragiques ont émaillé l''histoire d''Honolulu, notamment l''incendie (volontaire) de Chinatown en 1900 
        à la suite de rumeurs de peste et l''attaque de l''Empire japonais sur Pearl Harbor le 7 décembre 1941. wikipedia',
        'honolulu.jpg'
    ),
    (
        'Las Vegas',
        'Etats-Unis',
        'LAS',
        'US',
        'Amérique du Nord',
        '36.1672559',
        '-115.148516',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"petit", "moyen", "grand"}',
        'Situé dans le désert de Mojave, Las Vegas présentait à l''époque un certain nombre de zones humides ("vega" en espagnol signifie "vallée fertile"). 
        C''est pourquoi l''aventurier espagnol Antonio Armijo décida d''appeler Las Vegas en 1829. 
        La région était très peu peuplée, habitée par les Amérindiens Païutes. Les premiers Blancs à s''y établir furent les Mormons vers 1855, 
        lorsque Las Vegas devint une partie des États-Unis, puisqu''elle appartenait jusque-là au Mexique. 
        En 1864, l''armée construisit le Fort Baker favorisant l''installation de la population, qui ne commença que le 15 mai 1905 
        avec l''arrivée du chemin de fer, date à laquelle la ville de Las Vegas est née. 
        En 1900, les sources qui arrosaient les zones humides et qui avaient donné son nom à la ville ont été canalisées et ont permis à une population 
        de s''installer autour du Fort et d''alimenter en eau les trains qui circulaient entre Los Angeles et Albuquerque. visitonslasvegas.com',
        'las-vegas.jpg'
    ),
    (
        'Los Angeles',
        'Etats-Unis',
        'LAX',
        'US',
        'Amérique du Nord',
        '34.0536909',
        '-118.242766',
        '{"ville", "nature", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"moyen", "petit", "grand"}',
        'El Pueblo de Nuestra Senora la Reina de Los Angeles de Porciúncula. 
        Tout le monde sait que Los Angeles signifie "Les Anges" en espagnol, mais peu de gens connaissent son nom complet, 
        qui est composé de 12 mots ! Signifiant "Le village de Notre-Dame la Reine des Anges du fleuve de Portioncule", 
        il a pour origine le petit village qui deviendra plus tard le centre de L.A. Ce nom fut donné par les Espagnols, 
        premiers conquérants du territoire en 1769. Il reprend le nom d''une sainte fêtée la veille dans le calendrier. linternaute.fr',
        'los-angeles.jpg'
    ),
    (
        'New York',
        'Etats-Unis',
        'NYC',
        'US',
        'Amérique du Nord',
        '40.7127281',
        '-74.0060152',
        '{"ville"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "tempéré", "chaud", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        ' La ville de New York se compose de cinq arrondissements appelés boroughs : Manhattan, Brooklyn, Queens, le Bronx et Staten Island. 
        New York exerce un impact significatif sur le commerce mondial, la finance, les médias, l''art, la mode, la recherche, la technologie, 
        l''éducation, le divertissement et le tourisme, regroupant l''ensemble des caractéristiques d''une ville mondiale. 
        Si elle n''est plus la capitale fédérale des États-Unis depuis plus de deux siècles (elle occupe cette fonction de 1785 à 17902), 
        New York alimente pendant quelques décennies une rivalité financière et politique avec Philadelphie. wikipedia.fr',
        'new-york.jpg'
    ),
    (
        'Nouvelle-Orléans',
        'Etats-Unis',
        'NEW',
        'US',
        'Amérique du Nord',
        '29.9759983',
        '-90.0782127',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"tempéré", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        ' Berceau du jazz, La Nouvelle-Orléans est marquée par l''héritage colonial français, que l''on retrouve aussi bien dans la toponymie que dans l''architecture ou les traditions locales. 
        Fondée en 1718 par Jean-Baptiste Le Moyne, sieur de Bienville et des colons français, son nom est choisi en l''honneur du régent Philippe, duc d''Orléans. 
        Nommée capitale de la Louisiane en 1722, elle est construite ex nihilo selon un plan en damier symétrique. Elle devient peu à peu un centre commercial, 
        exportant vers l''Europe des peaux et fourrures produites par les Amérindiens ainsi que des produits de plantations (indigotier, tabac). 
        Cédée à l''Empire espagnol puis reprise par la France, la ville est définitivement vendue aux États-Unis, avec la Louisiane, par Napoléon Bonaparte en 1803. wikipedia.fr',
        'nouvelle-orleans.jpg'
    ),
    (
        'Miami',
        'Etats-Unis',
        'MIA',
        'US',
        'Amérique du Nord',
        '25.7741728',
        '-80.19362',
        '{"ville", "nature", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "petit", "grand"}',
        'Les premiers à arriver en Floride furent Vicente Yánez Pinzón et Américo Vespucio, qui, en 1498, arrivèrent jusqu’à la baie de Chesapeake. 
        Quinze ans plus tard, le 2 avril 1513, Juan Ponce de León, originaire de Valladolid, donna naissance à La Floride. 
        La Floride (en anglais Florida) doit son nom à Juan Ponce de León, qui découvra la région au moment du dimanche des Rameaux ; 
        fête connue en France sous le nom de « Pâques fleuries » et en Espagne sous le nom de Pascua florida. 
        Il était parti avec trois navires portoricains à la recherche de la mythique "fontaine de jouvence". 
        Au cours de ce premier voyage, il navigua près de la plage de Biscayne, Mias l’on ignore s’il débarqua. 
        Cette zone a été habitée pendant des milliers d''années par des tribus indiennes. À l''arrivée du marin espagnol, 
        la ville été occupée par plusieurs tribus dont les "Indiens de Miami" qui donnèrent leur nom à la rivière Miami
        puis à la ville. miami.fr',
        'miami.jpg'
    ),
    (
        'Alaska',
        'Etats-Unis',
        'ANC',
        'US',
        'Amérique du Nord',
        '61.2163129',
        '-149.894852',
        '{"ville", "nature", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "froid"}}',
        '{"moyen", "grand"}',
        'Alaska signifie « grande Terre » ou « continent » en aléoute3. Cette région, que l''on appelait au xixe siècle l''« Amérique russe », 
        tire son nom d''une longue presqu''île, au nord-ouest du continent américain, à environ 1 000 kilomètres au sud du détroit de Bering, et qui se lie, vers le sud, aux îles Aléoutiennes. 
        Le surnom de l''Alaska est « la dernière frontière » ou « la terre du soleil de minuit ». 
        Peuplé par des Aléoutes, Inuits (notamment Iñupiat et Yupiks) et peut-être d''autres Amérindiens depuis plusieurs millénaires, 
        le territoire est colonisé par des trappeurs russes à la fin du xviiie siècle. Les ressources de l''Alaska proviennent alors essentiellement du commerce du bois et de la traite des fourrures. 
        Le 30 mars 1867, les États-Unis l''achètent à la Russie pour la somme de 7,2 millions de dollars (environ 120 millions de dollars actuels), 
        et celui-ci adhère à l''Union le 3 janvier 1959. Les secteurs économiques prédominants aujourd''hui sont la pêche, le tourisme, 
        et surtout la production d''hydrocarbures (pétrole, gaz) depuis la découverte de gisements à Prudhoe Bay dans les années 1970. wikipedia.fr',
        'alaska.jpg'
    ),
    (
        'Toronto',
        'Canada',
        'YYZ',
        'CA',
        'Amérique du Nord',
        '43.6534817',
        '-79.3839347',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "chaud", "tempéré"}}',
        '{"moyen", "petit", "grand"}',
        'La région de Toronto, située sur un vaste plateau en pente jalonné de rivières, de ravins et de forêts, est habitée depuis plus de 10 000 ans. 
        Après la brève installation d''un fort par les Français puis l’achat contesté de la région au peuple Mississauga par la Couronne britannique, 
        les colons anglais fondent en 1793 la ville d''York, qui devient la capitale du Haut-Canada. Pendant la guerre de 1812, 
        la ville est le théâtre de la bataille d''York et subit de lourds dégâts par les troupes américaines. York est renommée Toronto en 1834. 
        Elle est désignée capitale de la province de l''Ontario en 1867 par la Confédération canadienne. 
        La ville s''est depuis étendue au-delà de ses frontières d''origine, à la suite de plusieurs fusions, 
        jusqu''à atteindre la superficie actuelle de 630,2 km2. wikipedia.fr',
        'toronto.jpg'
    ),
    (
        'Vancouver',
        'Canada',
        'YVR',
        'CA',
        'Amérique du Nord',
        '49.2608724',
        '-123.113952',
        '{"ville", "nature", "montagne"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "tempéré", "tempéré"}}',
        '{"petit", "moyen", "grand"}',
        'Les premiers Européens à explorer la région furent le Capitaine espagnol José María Narváez en 1791, et le Capitaine britannique George Vancouver en 1792. 
        La région ne fut peuplée par les Européens qu''environ un siècle plus tard, en 1862. 
        La ville s''agrandit rapidement à la suite de la construction du Canadien Pacifique (CPR), ligne transcontinentale provenant du Canada-Est 
        qui opéra un service continu dès la fin des années 1880. Les immigrants chinois affluèrent en nombre dans la région pour la construction du CPR. 
        Ce furent ensuite des immigrants Européens provenant de l''Est Canadien qui s''établirent, comme le firent plus tard d''autres immigrants d''Asie 
        et d''autres régions du monde, du fait du développement mondial des lignes aériennes. wikipedia.fr',
        'vancouver.jpg'
    ),
    (
        'Montréal',
        'Canada',
        'YMX',
        'CA',
        'Amérique du Nord',
        '45.5031824',
        '-73.5698065',
        '{"ville", "nature"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"froid", "froid", "chaud", "froid"}}',
        '{"moyen", "petit"}',
        'La ville doit son nom au mont Royal qui surplombe le centre des affaires et le centre historique de la ville, 
        tous deux situés dans l''arrondissement Ville-Marie. Montréal est découpé en 19 arrondissements qui couvrent les trois-quarts de l’île de Montréal, 
        la plus grande de l''archipel d''Hochelaga, mais également l’île Bizard, l''île des Soeurs et les îles Sainte-Hélène et Notre-Dame. 
        Il y a plus de 1,8 millions d''habitants dans les limites municipales. Langue officielle de l''administration, le français est la langue d''usage 
        de la majorité de la population. L''anglais et d''autres langues y occupent une place importante; 
        la moitié des montréalais sont bilingues et près du quart sont trilingues. wikipedia',
        'montreal.jpg'
    ),
    (
        'La Havane',
        'Cuba',
        'HAV',
        'CU',
        'Amérique du Nord',
        '23.135305',
        '-82.3589631',
        '{"ville", "nature", "mer"}',
        '{{"dec-janv-fev", "mars-avril-mai", "juin-juil-aout", "sept-oct-nov"}, {"chaud", "chaud", "chaud", "chaud"}}',
        '{"moyen", "grand"}',
        'À l''origine, La Havane était un port de commerce, victime d''attaques régulières venant de boucaniers, pirates et corsaires. 
        La ville fut réduite en cendres en 1538 et 1555. L''attaque de 1555, qui eut pour résultat l''incendie de la ville, 
        fut menée par le corsaire Jacques de Sores. Il prit La Havane facilement, la pilla et la brûla. 
        De Sores quitta la ville sans obtenir l''énorme richesse qu''il espérait y trouver. De telles attaques convainquirent le royaume d''Espagne 
        de financer la construction des premières forteresses dans les grandes villes — pas seulement pour faire face aux pirates et corsaires, 
        mais aussi pour exercer un contrôle plus rigoureux sur le commerce avec le Nouveau Monde, et pour limiter le contrabando (marché noir), 
        alors très répandu, qui était né des restrictions commerciales imposées par le Casa de Contratación de Séville 
        (la maison de commerce contrôlée par la couronne, qui exerçait un monopole sur le commerce avec cette région du monde). wikipedia.fr',
        'cuba.jpg'
    );

COMMIT;
