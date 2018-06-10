export class Car {
    id: number;
    brand: string;
    name: string;
    releaseDate: Date;
    owners?: Owner[];
}

export class Owner {
    id: number;
    name: string;
    startDate: Date;
}

export const CARS: Car[] = [
    {
        id: 1,
        brand: 'BMW',
        name: '1',
        releaseDate: new Date('2010-01-01'),
        owners: [
            { id: 1, name: 'Jan Peeters', startDate: new Date('2010-01-01') },
            { id: 2, name: 'Jef Peeters', startDate: new Date('2010-06-01') }
        ]
    },
    {
        id: 2,
        brand: 'BMW',
        name: '3',
        releaseDate: new Date('2011-03-01'),
        owners: [
            { id: 3, name: 'Jan Peters', startDate: new Date('2011-03-01') },
            { id: 4, name: 'Jef De Smedt', startDate: new Date('2011-06-01') }
        ]
    },
    { id: 3, brand: 'Audi', name: 'A1', releaseDate: new Date('2011-01-01') },
    { id: 4, brand: 'Audi', name: 'A4', releaseDate: new Date('2012-01-01') },
    { id: 5, brand: 'Ford', name: 'Focus', releaseDate: new Date('2010-01-01') },
    {
        id: 6,
        brand: 'Mercedes',
        name: 'CLA',
        releaseDate: new Date('2013-01-01'),
        owners: [
            { id: 5, name: 'Jan Jansens', startDate: new Date('2013-01-01') },
            { id: 6, name: 'Jef Delen', startDate: new Date('2014-06-01') }
        ]
    },
    {
        id: 7,
        brand: 'Mercedes',
        name: 'A-klasse',
        releaseDate: new Date('2009-02-01'),
        owners: [
            { id: 7, name: 'Jan Janssen', startDate: new Date('2009-02-01') },
            { id: 8, name: 'Jef Jefferson', startDate: new Date('2010-06-01') }
        ]
    },
    { id: 8, brand: 'Skoda', name: 'Superb', releaseDate: new Date('2009-01-01') },
    { id: 9, brand: 'Audi', name: 'A3', releaseDate: new Date('2010-01-02') },
    { id: 10, brand: 'Skoda', name: 'Octavia', releaseDate: new Date('2012-01-01') },
    { id: 11, brand: 'Volkswagen', name: 'Polo', releaseDate: new Date('2013-01-02') },
    { id: 12, brand: 'Mercedes', name: 'C-klasse', releaseDate: new Date('2011-01-01') },
    { id: 13, brand: 'BMW', name: '4', releaseDate: new Date('2014-01-01') },
    { id: 14, brand: 'Volkswagen', name: 'Golf', releaseDate: new Date('2010-02-01') },
    {
        id: 1,
        brand: 'BMW',
        name: '1',
        releaseDate: new Date('2010-01-01'),
        owners: [
            { id: 1, name: 'Jan Peeters', startDate: new Date('2010-01-01') },
            { id: 2, name: 'Jef Peeters', startDate: new Date('2010-06-01') }
        ]
    },
    {
        id: 2,
        brand: 'BMW',
        name: '3',
        releaseDate: new Date('2011-03-01'),
        owners: [
            { id: 3, name: 'Jan Peters', startDate: new Date('2011-03-01') },
            { id: 4, name: 'Jef De Smedt', startDate: new Date('2011-06-01') }
        ]
    },
    { id: 3, brand: 'Audi', name: 'A1', releaseDate: new Date('2011-01-01') },
    { id: 4, brand: 'Audi', name: 'A4', releaseDate: new Date('2012-01-01') },
    { id: 5, brand: 'Ford', name: 'Focus', releaseDate: new Date('2010-01-01') },
    {
        id: 6,
        brand: 'Mercedes',
        name: 'CLA',
        releaseDate: new Date('2013-01-01'),
        owners: [
            { id: 5, name: 'Jan Jansens', startDate: new Date('2013-01-01') },
            { id: 6, name: 'Jef Delen', startDate: new Date('2014-06-01') }
        ]
    },
    {
        id: 7,
        brand: 'Mercedes',
        name: 'A-klasse',
        releaseDate: new Date('2009-02-01'),
        owners: [
            { id: 7, name: 'Jan Janssen', startDate: new Date('2009-02-01') },
            { id: 8, name: 'Jef Jefferson', startDate: new Date('2010-06-01') }
        ]
    },
    { id: 8, brand: 'Skoda', name: 'Superb', releaseDate: new Date('2009-01-01') },
    { id: 9, brand: 'Audi', name: 'A3', releaseDate: new Date('2010-01-02') },
    { id: 10, brand: 'Skoda', name: 'Octavia', releaseDate: new Date('2012-01-01') },
    { id: 11, brand: 'Volkswagen', name: 'Polo', releaseDate: new Date('2013-01-02') },
    { id: 12, brand: 'Mercedes', name: 'C-klasse', releaseDate: new Date('2011-01-01') },
    { id: 13, brand: 'BMW', name: '4', releaseDate: new Date('2014-01-01') },
    { id: 14, brand: 'Volkswagen', name: 'Golf', releaseDate: new Date('2010-02-01') },
    {
        id: 1,
        brand: 'BMW',
        name: '1',
        releaseDate: new Date('2010-01-01'),
        owners: [
            { id: 1, name: 'Jan Peeters', startDate: new Date('2010-01-01') },
            { id: 2, name: 'Jef Peeters', startDate: new Date('2010-06-01') }
        ]
    },
    {
        id: 2,
        brand: 'BMW',
        name: '3',
        releaseDate: new Date('2011-03-01'),
        owners: [
            { id: 3, name: 'Jan Peters', startDate: new Date('2011-03-01') },
            { id: 4, name: 'Jef De Smedt', startDate: new Date('2011-06-01') }
        ]
    },
    { id: 3, brand: 'Audi', name: 'A1', releaseDate: new Date('2011-01-01') },
    { id: 4, brand: 'Audi', name: 'A4', releaseDate: new Date('2012-01-01') },
    { id: 5, brand: 'Ford', name: 'Focus', releaseDate: new Date('2010-01-01') },
    {
        id: 6,
        brand: 'Mercedes',
        name: 'CLA',
        releaseDate: new Date('2013-01-01'),
        owners: [
            { id: 5, name: 'Jan Jansens', startDate: new Date('2013-01-01') },
            { id: 6, name: 'Jef Delen', startDate: new Date('2014-06-01') }
        ]
    },
    {
        id: 7,
        brand: 'Mercedes',
        name: 'A-klasse',
        releaseDate: new Date('2009-02-01'),
        owners: [
            { id: 7, name: 'Jan Janssen', startDate: new Date('2009-02-01') },
            { id: 8, name: 'Jef Jefferson', startDate: new Date('2010-06-01') }
        ]
    },
    { id: 8, brand: 'Skoda', name: 'Superb', releaseDate: new Date('2009-01-01') },
    { id: 9, brand: 'Audi', name: 'A3', releaseDate: new Date('2010-01-02') },
    { id: 10, brand: 'Skoda', name: 'Octavia', releaseDate: new Date('2012-01-01') },
    { id: 11, brand: 'Volkswagen', name: 'Polo', releaseDate: new Date('2013-01-02') },
    { id: 12, brand: 'Mercedes', name: 'C-klasse', releaseDate: new Date('2011-01-01') },
    { id: 13, brand: 'BMW', name: '4', releaseDate: new Date('2014-01-01') },
    { id: 14, brand: 'Volkswagen', name: 'Golf', releaseDate: new Date('2010-02-01') },
    {
        id: 1,
        brand: 'BMW',
        name: '1',
        releaseDate: new Date('2010-01-01'),
        owners: [
            { id: 1, name: 'Jan Peeters', startDate: new Date('2010-01-01') },
            { id: 2, name: 'Jef Peeters', startDate: new Date('2010-06-01') }
        ]
    },
    {
        id: 2,
        brand: 'BMW',
        name: '3',
        releaseDate: new Date('2011-03-01'),
        owners: [
            { id: 3, name: 'Jan Peters', startDate: new Date('2011-03-01') },
            { id: 4, name: 'Jef De Smedt', startDate: new Date('2011-06-01') }
        ]
    },
    { id: 3, brand: 'Audi', name: 'A1', releaseDate: new Date('2011-01-01') },
    { id: 4, brand: 'Audi', name: 'A4', releaseDate: new Date('2012-01-01') },
    { id: 5, brand: 'Ford', name: 'Focus', releaseDate: new Date('2010-01-01') },
    {
        id: 6,
        brand: 'Mercedes',
        name: 'CLA',
        releaseDate: new Date('2013-01-01'),
        owners: [
            { id: 5, name: 'Jan Jansens', startDate: new Date('2013-01-01') },
            { id: 6, name: 'Jef Delen', startDate: new Date('2014-06-01') }
        ]
    },
    {
        id: 7,
        brand: 'Mercedes',
        name: 'A-klasse',
        releaseDate: new Date('2009-02-01'),
        owners: [
            { id: 7, name: 'Jan Janssen', startDate: new Date('2009-02-01') },
            { id: 8, name: 'Jef Jefferson', startDate: new Date('2010-06-01') }
        ]
    },
    { id: 8, brand: 'Skoda', name: 'Superb', releaseDate: new Date('2009-01-01') },
    { id: 9, brand: 'Audi', name: 'A3', releaseDate: new Date('2010-01-02') },
    { id: 10, brand: 'Skoda', name: 'Octavia', releaseDate: new Date('2012-01-01') },
    { id: 11, brand: 'Volkswagen', name: 'Polo', releaseDate: new Date('2013-01-02') },
    { id: 12, brand: 'Mercedes', name: 'C-klasse', releaseDate: new Date('2011-01-01') },
    { id: 13, brand: 'BMW', name: '4', releaseDate: new Date('2014-01-01') },
    { id: 14, brand: 'Volkswagen', name: 'Golf', releaseDate: new Date('2010-02-01') },
];

export class Pand {
    id: string;
    referte: string;
    locatie: string;
    adresString: string;
    status: number;
    statusDatum: Date;
    entiteiten: Entiteit[];
}

export class Entiteit {
    id: string;
    referte: string;
    locatie: string;
    adres: string;
    status: number;
}

export const PANDEN: Pand[] = [
    {
        id: '3a83b804-8d10-4cad-9559-b200b451566c',
        referte: 'PA16-00001',
        locatie: 'test test',
        statusDatum: new Date('1988-04-13T00:00:00'),
        status: 0,
        adresString: 'Meir 5 / Meir 6, 2000 Antwerpen',
        entiteiten: [
            {
                id: 'd1b0b4eb-efdc-4083-acd1-0304f4d16c10',
                referte: 'EN17-00001',
                locatie: 'vooraan rechts',
                adres: 'Meir 10 bus 6, 2000 Antwerpen',
                status: 0
            },
            {
                id: '117c5990-dc52-46f3-ae61-283f9db1c644',
                referte: 'EN17-00002',
                locatie: 'links achteraan',
                adres: 'Meir 5 bus 1, 2000 Antwerpen',
                status: 0
            }
        ]
    },
    {
        id: '3a83b804-8d10-4cad-9559-b200b451566d',
        referte: 'PA16-00002',
        locatie: 'test test',
        statusDatum: new Date('1988-04-19T00:00:00'),
        status: 0,
        adresString: 'Meir 5 / Meir 6, 2000 Antwerpen',
        entiteiten: [
            {
                id: 'd1b0b4eb-efdc-4083-acd1-0304f4d16c11',
                referte: 'EN17-00003',
                locatie: 'vooraan rechts',
                adres: 'Meir 10 bus 6, 2000 Antwerpen',
                status: 0
            },
            {
                id: '117c5990-dc52-46f3-ae61-283f9db1c645',
                referte: 'EN17-00004',
                locatie: 'links achteraan',
                adres: 'Meir 5 bus 1, 2000 Antwerpen',
                status: 0
            }
        ]
    },
];