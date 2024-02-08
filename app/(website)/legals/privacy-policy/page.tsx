import Link from 'next/link';
import React from 'react';

const ConfidentialPolicy = () => {
    return (
        <div>
            <div className='flex flex-col gap-8 border-b-3 border-moggle px-16 py-10 md:px-32 md:py-20'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl uppercase'>
                        Politique de confidentialité{' '}
                    </h1>
                    <p>alstudiophotos.com</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>ARTICLE 1 - PRÉAMBULE</h2>
                    <p>
                        La présente politique de confidentialité a pour but
                        d’informer les utilisateurs du site :
                    </p>

                    <ul>
                        <li>
                            - Sur la manière dont sont collectées leurs données
                            personnelles. Sont considérées comme des données
                            personnelles, toute information permettant
                            d’identifier un utilisateur. A ce titre, il peut
                            s’agir : de ses noms et prénoms, de son âge, de son
                            adresse postale ou email, de sa localisation ou
                            encore de son adresse IP (liste non-exhaustive)
                        </li>
                        <li>
                            - Sur les droits dont ils disposent concernant ces
                            données;
                        </li>
                        <li>
                            - Sur la personne responsable du traitement des
                            données à caractère personnel collectées et
                            traitées;
                        </li>
                        <li>
                            - Sur les destinataires de ces données personnelles
                            ;
                        </li>
                        <li>
                            - Sur la politique du site en matière de cookies.
                        </li>
                    </ul>
                    <p>
                        Cette politique complète les mentions légales et les
                        Conditions Générales d’Utilisation consultables par les
                        utilisateurs à l’adresse suivante :{' '}
                        <Link href={'/legals/legals-mentions'} className='underline'>
                            Mentions légales
                        </Link>{' '}
                        –{' '}
                        <Link href={'/legals/cgu'} className='underline'>
                            Conditions Générales d’Utilisation
                        </Link>
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>
                        ARTICLE 2 - PRINCIPES RELATIFS À LA COLLECTE ET AU
                        TRAITEMENT DES DONNÉES PERSONNELLES
                    </h2>
                    <p>
                        Conformément à l’article 5 du Règlement européen
                        2016/679, les données à caractère personnel sont :
                    </p>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            - Traitées de manière licite, loyale et transparente
                            vis-à-vis de la personne concernée (licéité,
                            loyauté, transparence) ;
                        </li>
                        <li>
                            - Collectées pour des finalités déterminées (cf.
                            Article 3.1 des présentes), explicites et légitimes,
                            et ne pas être traitées ultérieurement d&apos;une
                            manière incompatible avec ces finalités ;
                        </li>
                        <li>
                            - Adéquates, pertinentes et limitées à ce qui est
                            nécessaire au regard des finalités pour lesquelles
                            elles sont traitées ;{' '}
                        </li>
                        <li>
                            - Exactes et, si nécessaire, tenues à jour. Toutes
                            les mesures raisonnables doivent être prises pour
                            que les données à caractère personnel qui sont
                            inexactes, eu égard aux finalités pour lesquelles
                            elles sont traitées, soient effacées ou rectifiées
                            sans tarder{' '}
                        </li>
                        <li>
                            - Conservées sous une forme permettant
                            l&apos;identification des personnes concernées
                            pendant une durée n&apos;excédant pas celle
                            nécessaire au regard des finalités pour lesquelles
                            elles sont traitées ;{' '}
                        </li>
                        <li>
                            - Traitées de façon à garantir une sécurité
                            appropriée des données collectées, y compris la
                            protection contre le traitement non autorisé ou
                            illicite et contre la perte, la destruction ou les
                            dégâts d&apos;origine accidentelle, à l&apos;aide de
                            mesures techniques ou organisationnelles
                            appropriées.{' '}
                        </li>
                    </ul>
                    <p>
                        Le traitement n&apos;est licite que si, et dans la
                        mesure où, au moins une des conditions suivantes est
                        remplie :
                    </p>

                    <ul>
                        La personne concernée a consenti au traitement de ses
                        données à caractère personnel pour une ou plusieurs
                        finalités spécifiques ;
                        <li>
                            Le traitement est nécessaire à l&apos;exécution
                            d&apos;un contrat auquel la personne concernée est
                            partie ou à l&apos;exécution de mesures
                            précontractuelles prises à la demande de celle-ci ;
                        </li>
                        <li>
                            Le traitement est nécessaire au respect d&apos;une
                            obligation légale à laquelle le responsable du
                            traitement est soumis ;
                        </li>
                        <li>
                            Le traitement est nécessaire à la sauvegarde des
                            intérêts vitaux de la personne concernée ou
                            d&apos;une autre personne physique ;
                        </li>
                        <li>
                            Le traitement est nécessaire à l&apos;exécution
                            d&apos;une mission d&apos;intérêt public ou relevant
                            de l&apos;exercice de l&apos;autorité publique dont
                            est investi le responsable du traitement ;
                        </li>
                        <li>
                            Le traitement est nécessaire aux fins des intérêts
                            légitimes poursuivis par le responsable du
                            traitement ou par un tiers, à moins que ne prévalent
                            les intérêts ou les libertés et droits fondamentaux
                            de la personne concernée qui exigent une protection
                            des données à caractère personnel, notamment lorsque
                            la personne concernée est un enfant.
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>
                        ARTICLE 3 - DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET
                        TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE
                    </h2>
                    <h3 className='text-lg'>
                        Article 3.1 : Données collectées
                    </h3>
                    <p>
                        Les données personnelles collectées dans le cadre de
                        notre activité sont les suivantes :
                    </p>
                    <ul>
                        <li>- Nom, Prénom;</li>
                        <li>- Adresse email ;</li>
                    </ul>
                    La collecte et le traitement de ces données répond à la
                    (aux) finalité(s) suivante(s) :
                    <ul>
                        <li>
                            - Recontacter l&apos;utilisateur suite à une demande
                            de contact ;
                        </li>
                    </ul>
                    <h3 className='text-lg'>
                        Article 3.2 : Mode de collecte des données
                    </h3>
                    <p>
                        Lorsque vous utilisez notre site, sont automatiquement
                        collectées les données suivantes de manière anonyme :
                    </p>
                    <ul>
                        <li>Données de performances</li>
                        <li>Données de navigation</li>
                        <li>Données démographoques </li>
                    </ul>
                    <p>
                        Elles sont conservées par le responsable du traitement
                        dans des conditions raisonnables de sécurité, pour une
                        durée maximale de : 3 ans.
                        <br />
                        La société est susceptible de conserver certaines
                        données à caractère personnel au-delà des délais
                        annoncés ci-dessus afin de remplir ses obligations
                        légales ou réglementaires.
                    </p>
                    <h3 className='text-lg'>
                        Article 3.2 : Hébergement des données
                    </h3>
                    <p>
                        Le site alstudiophotos.com est hébergé par : Vercel Inc.
                        - 440 N Barranca Ave #4133 Covina, CA 91723 -
                        privacy@vercel.com
                    </p>
                    <h3 className='text-lg'>
                        Article 3.4 : Politique en matière de “cookies”
                    </h3>
                    <p>
                        La présente politique, la « Politique en matière de
                        cookies », a pour objet d’informer de manière claire,
                        simple et complète les utilisateurs du présent site, l’
                        « Utilisateur » ou « vous/votre/vos », sur la manière
                        dont AL Studio Photos, ou « nous », utilise les cookies
                        sur son site, le « Site ».
                    </p>
                    <p>
                        Un cookie est un ensemble d’informations déposées dans
                        le terminal de l’Utilisateur lorsque celui-ci navigue
                        sur le Site.{' '}
                    </p>
                    <p>
                        Le dépôt de cookies publicitaires et/ou de mesure
                        d’audience est soumis à votre consentement, c’est pour
                        cela que vous trouverez en bas de notre site un bandeau
                        cookies qui vous permet à tout moment d’accepter,
                        paramétrer et/ou de refuser le dépôt de ces derniers.
                        Vous avez également la possibilité de changer d’avis à
                        tout moment via le gestionnaire mis à votre disposition
                        ou via votre navigateur.
                    </p>
                    <h4>Types de «Cookies» et utilisation</h4>
                    <h5>«Cookies» strictements nécessaires</h5>
                    <p>
                        Ces cookies sont nécessaires pour les opérations propres
                        aux services et aux produits qui sont fournis sur le
                        Site. Ils sont utilisés pour fournir les fonctionnalités
                        basiques du Site, telles que se souvenir des
                        informations qui ont été insérées dans un formulaire. Si
                        vous empêchez l’installation de ces cookies, vous ne
                        pourrez plus utiliser ces fonctionnalités et le Site
                        pourrait ne pas fonctionner de façon efficace.
                    </p>
                    <h5>«Cookies» de performance</h5>
                    <p>
                        Ces cookies sont utilisés pour collecter des données
                        anonymes à des fins statistiques. Ils nous permettent de
                        mesurer l’audience du Site et d’analyser la façon dont
                        les visiteurs surfent sur le Site (nombre de visiteurs
                        sur le Site, nombre de visites par page, temps passé sur
                        chaque page, localisation des clics…). Ils sont
                        également utilisés pour détecter des problèmes de
                        navigation et toute autre difficulté. Ces cookies nous
                        aident à améliorer notre Site et votre navigation.
                    </p>
                    <h5>«Cookies» de fonctionnalité</h5>
                    <p>
                        Ces cookies sont utilisés pour se souvenir de vos choix,
                        de vos réglages et de vos préférences de contenu sur le
                        Site (comme votre langue, vos choix de
                        personnalisation…) et vous offrir ainsi une expérience
                        de navigation personnalisée en adaptant les contenus du
                        Site pour vous. Si vous refusez ces cookies, nous ne
                        pourrons plus vous offrir certaines fonctionnalités et
                        certaines pages du Site pourraient ne pas fonctionner
                        correctement.
                    </p>
                    <h5>«Cookies» de partage</h5>
                    <p>
                        Ces cookies sont spécifiquement liés à l’utilisation des
                        boutons de partage d’une page du Site sur les réseaux
                        sociaux (LinkedIn, etc.). Les boutons de partage vous
                        permettent de directement partager sur le réseau social
                        concerné une page du Site. En cliquant sur le bouton de
                        partage sur le réseau social concerné, un ou plusieurs
                        cookies sont alors déposés sur votre terminal
                        (ordinateur, smartphone, tablette) par le réseau social.
                        Nous n’avons ni accès ni contrôle sur ces cookies de
                        tiers, qui peuvent être des cookies analytiques, de
                        performance ou de ciblage. Nous vous suggérons de
                        consulter les sites internet de ces tiers pour plus
                        d’informations au sujet de leurs cookies et pour savoir
                        comment les gérer.
                    </p>
                    <h5>
                        Réglage et blocage des cookies via notre gestionnaire de
                        cookies
                    </h5>
                    <p>
                        La liste des cookies que nous utilisons est consultable
                        via l’outil de gestion que nous avons mis en place. Vous
                        avez la possibilité de les désactiver à tout moment.
                        Néanmoins, nous attirons votre attention sur le fait que
                        certains cookies sont indispensables au bon
                        fonctionnement du Site et qu’il est donc déconseillé de
                        les désactiver.
                    </p>
                    <h5>
                        Réglage et blocage des cookies via vos paramètres de
                        navigation
                    </h5>
                    <p>
                        Vous pouvez également contrôler les cookies grâce aux
                        paramètres de votre navigateur. Si la plupart des
                        navigateurs sont paramétrés par défaut et acceptent
                        l’installation de cookies, vous avez la possibilité, si
                        vous le souhaitez, de choisir d’accepter tous les
                        cookies, ou de les rejeter systématiquement ou encore de
                        choisir ceux que vous acceptez selon l’émetteur. Vous
                        pouvez également paramétrer votre navigateur pour
                        accepter ou refuser, au cas par cas, les cookies
                        préalablement à leur installation. Vous pouvez également
                        régulièrement supprimer les cookies de votre terminal
                        via votre navigateur.{' '}
                    </p>
                    <p>
                        L’utilisation de cookies ou de technologies similaires
                        par tout site Internet tiers, fournisseur de contenu
                        publicitaire est soumise à leur propre politique de
                        confidentialité en matière de cookies.{' '}
                    </p>
                    <p>
                        La CNIL (Commission Nationale Informatique et Liberté)
                        propose en téléchargement gratuit, un logiciel de
                        gestion des cookies sur son site Internet : rendez-vous
                        à l’adresse
                        https://www.cnil.fr/vos-droits/vos-traces/les-cookies/
                        pour en savoir plus.
                    </p>
                    <p>
                        Pour la gestion des cookies et de vos choix, la
                        configuration de chaque navigateur est différente.
                        <br />
                        Elle est décrite dans le menu d’aide de votre
                        navigateur, qui vous permettra de savoir de quelle
                        manière modifier vos souhaits en matière de cookies.
                        <br />
                        Lors de votre connexion au Site, vous aurez la
                        possibilité d’effectuer un choix libre et éclairé en
                        matière de dépôt de cookies.
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>
                        ARTICLE 4 - RESPONSABLE DU TRAITEMENT DES DONNÉES ET
                        DÉLÉGUÉ À LA PROTECTION DES DONNÉES
                    </h2>

                    <p>
                        Les données à caractère personnelles sont collectées par
                        AL Studio Photos.
                    </p>

                    <p>
                        Le responsable du traitement des données à caractère
                        personnel peut être contacté de la manière suivante par
                        mail à : contact@alstudiophotos.com
                        <br />
                        Si vous estimez, après nous avoir contactés, que vos
                        droits “Informatique et Libertés”, ne sont pas
                        respectés, vous pouvez adresser une information à la
                        CNIL.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>
                        ARTICLE 5 - LES DROITS DE L’UTILISATEUR EN MATIÈRE DE
                        COLLECTE ET DE TRAITEMENT DES DONNÉES
                    </h2>
                    <ul>
                        <li>
                            - Droit d’accès, de rectification et droit à
                            l’effacement des données (posés respectivement aux
                            articles 15, 16 et 17 du RGPD) ;
                        </li>
                        <li>
                            - Droit à la portabilité des données (article 20 du
                            RGPD) ;
                        </li>
                        <li>
                            - Droit à la limitation (article 18 du RGPD) et à
                            l’opposition du traitement des données (article 21
                            du RGPD) ;
                        </li>
                        <li>
                            - Droit de ne pas faire l’objet d’une décision
                            fondée exclusivement sur un procédé automatisé ;{' '}
                        </li>
                        <li>
                            - Droit de déterminer le sort des données après la
                            mort ;{' '}
                        </li>
                        <li>
                            Droit de saisir l’autorité de contrôle compétente
                            (article 77 du RGPD).{' '}
                        </li>
                    </ul>
                    <p>
                        Pour exercer vos droits, veuillez adresser votre mail à
                        contact@alstudiophotos.com.
                        <br />
                        Afin que le responsable du traitement des données puisse
                        faire droit à sa demande, l’utilisateur peut être tenu
                        de lui communiquer certaines informations telles que :
                        ses noms et prénoms, son adresse e-mail.
                        <br />
                        Consulter le site cnil.fr pour plus d’informations sur
                        vos droits.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl'>
                        ARTICLE 6 - CONDITIONS DE MODIFICATION DE LA POLITIQUE
                        DE CONFIDENTIALITÉ
                    </h2>
                    <p>
                        L’éditeur du site alstudiophotos.com se réserve le droit
                        de pouvoir modifier la présente Politique à tout moment
                        afin d’assurer aux utilisateurs du site sa conformité
                        avec le droit en vigueur. <br />
                        Les éventuelles modifications ne sauraient avoir
                        d’incidence sur les achats antérieurement effectués sur
                        le site, lesquels restent soumis à la Politique en
                        vigueur au moment de l’achat et telle qu’acceptée par
                        l’utilisateur lors de la validation de l’achat. <br />
                        L’utilisateur est invité à prendre connaissance de cette
                        Politique à chaque fois qu’il utilise nos services, sans
                        qu’il soit nécessaire de l’en prévenir formellement.{' '}
                        <br />
                        La présente politique, éditée le 01/01/2024 a été mise à
                        jour le 07/02/2024.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConfidentialPolicy;
