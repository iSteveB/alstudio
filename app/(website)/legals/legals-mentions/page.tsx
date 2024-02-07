import Link from 'next/link';
import React from 'react';

const LegalMentions = () => {
    return (
        <div className='flex flex-col gap-8 border-b-3 border-moggle px-32 py-20'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl'>MENTIONS LEGALES</h1>
                <p>En vigueur au 01/01/2024</p>
            </div>

            <p>
                Conformément aux dispositions des Articles 6-III et 19 de la Loi
                n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
                numérique, dite L.C.E.N., il est porté à la connaissance des
                utilisateurs et visiteurs, ci-après l’ « Utilisateur », du site
                alstudiophotos.com , ci-après le « Site », les présentes
                mentions légales.
                <br />
                La connexion et la navigation sur le Site par l’Utilisateur
                implique acceptation intégrale et sans réserve des présentes
                mentions légales.
            </p>

            <div className='flex flex-col gap-4'>
                <h2 className='text-xl'>ARTICLE 1 - L&apos;EDITEUR</h2>

                <p>
                    L’édition et la direction de la publication du Site est
                    assurée par Steve BASSE, domiciliée à Rosny-Sur-Seine -
                    Yvelines, dont l&apos;adresse e-mail de contact est
                    contact@stevebasse.fr.
                </p>

                <p>Ci-après l’ « Éditeur ».</p>
            </div>

            <div className='flex flex-col gap-4'>
                <h2 className='text-xl'>ARTICLE 2 - L&apos;HEBERGEUR</h2>

                <p>
                    L&apos;hébergeur du Site est la société Vercel Inc., dont le
                    siège social est situé au 440 N Barranca Ave #4133 Covina,
                    CA 91723, privacy@vercel.com.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl'>ARTICLE 3 - ACCES AU SITE</h2>

                <p>
                    Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf
                    cas de force majeure, interruption programmée ou non et
                    pouvant découler d’une nécessité de maintenance.
                </p>

                <p>
                    En cas de modification, interruption ou suspension du Site,
                    l&apos;Éditeur ne saurait être tenu responsable.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl'>ARTICLE 4 - COLLECTE DES DONNEES</h2>

                <p>
                    Le Site assure à l&apos;Utilisateur une collecte et un
                    traitement d&apos;informations personnelles dans le respect
                    de la vie privée conformément à la loi n°78-17 du 6 janvier
                    1978 relative à l&apos;informatique, aux fichiers et aux
                    libertés.
                </p>

                <p>
                    En vertu de la loi Informatique et Libertés, en date du 6
                    janvier 1978, l&apos;Utilisateur dispose d&apos;un droit
                    d&apos;accès, de rectification, de suppression et
                    d&apos;opposition de ses données personnelles.
                    L&apos;Utilisateur exerce ce droit :
                </p>
                <ul>
                    <li>
                        - Par mail à l&apos;adresse : contact@alstudiophotos.com
                    </li>
                    <li>- Via un formulaire de contact ;</li>
                </ul>
            </div>
            <p>
                Toute utilisation, reproduction, diffusion, commercialisation,
                modification de toute ou partie du Site, sans autorisation de
                l’Éditeur est prohibée et pourra entraînée des actions et
                poursuites judiciaires telles que notamment prévues par le Code
                de la propriété intellectuelle et le Code civil.
            </p>

            <p>
                Pour plus d&apos;informations, se reporter à la Politique de
                Confidentialité du Site accessible à la rubrique «{' '}
                <Link href='/legals/privacy-policy' className='underline'>
                    Politique de Confidentialité
                </Link>{' '}
                » .
            </p>
        </div>
    );
};

export default LegalMentions;
