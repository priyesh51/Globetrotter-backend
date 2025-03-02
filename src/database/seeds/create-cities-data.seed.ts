import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { encodePassword } from 'src/common/helper/bcrypt.helper';
import { CitiesData } from 'src/api/cities-data/entities/cities-data.entity';

export default class CreateCitiesDataSeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    await dataSource.query(`SET FOREIGN_KEY_CHECKS=0;`);
    await dataSource.query(`TRUNCATE cities_data;`);
    await dataSource.query(`SET FOREIGN_KEY_CHECKS=1;`);

    const repository = dataSource.getRepository(CitiesData);
    await repository.insert([
      {
        city: 'Paris',
        country: 'France',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'New York',
        country: 'USA',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'London',
        country: 'UK',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Berlin',
        country: 'Germany',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Sydney',
        country: 'Australia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Toronto',
        country: 'Canada',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Rome',
        country: 'Italy',
        clues:
          '["Home to a famous bridge, river, or canal system.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Beijing',
        country: 'China',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Moscow',
        country: 'Russia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Dubai',
        country: 'UAE',
        clues:
          '["Home to a famous bridge, river, or canal system.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Istanbul',
        country: 'Turkey',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Rio de Janeiro',
        country: 'Brazil',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Mexico City',
        country: 'Mexico',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["This city is home to a famous sports team.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Seoul',
        country: 'South Korea',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Bangkok',
        country: 'Thailand',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["This city is home to a famous sports team.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Mumbai',
        country: 'India',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Cairo',
        country: 'Egypt',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Buenos Aires',
        country: 'Argentina',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Madrid',
        country: 'Spain',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Lisbon',
        country: 'Portugal',
        clues:
          '["A financial hub and a major center for global business.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Singapore',
        country: 'Singapore',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Johannesburg',
        country: 'South Africa',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Athens',
        country: 'Greece',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Stockholm',
        country: 'Sweden',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["This city is home to a famous sports team.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Helsinki',
        country: 'Finland',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Vienna',
        country: 'Austria',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Oslo',
        country: 'Norway',
        clues:
          '["A financial hub and a major center for global business.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Dublin',
        country: 'Ireland',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Copenhagen',
        country: 'Denmark',
        clues:
          '["A financial hub and a major center for global business.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Jakarta',
        country: 'Indonesia',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Manila',
        country: 'Philippines',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Lima',
        country: 'Peru',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Bogot\u00e1',
        country: 'Colombia',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Warsaw',
        country: 'Poland',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Prague',
        country: 'Czech Republic',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Budapest',
        country: 'Hungary',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Brussels',
        country: 'Belgium',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Zurich',
        country: 'Switzerland',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Santiago',
        country: 'Chile',
        clues:
          '["A financial hub and a major center for global business.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Kuala Lumpur',
        country: 'Malaysia',
        clues:
          '["Home to a famous bridge, river, or canal system.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city was founded over 500 years ago."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Hanoi',
        country: 'Vietnam',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Tehran',
        country: 'Iran',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Riyadh',
        country: 'Saudi Arabia',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city was founded over 500 years ago."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Casablanca',
        country: 'Morocco',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city was founded over 500 years ago."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Bucharest',
        country: 'Romania',
        clues:
          '["A financial hub and a major center for global business.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["This city is home to a famous sports team.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Caracas',
        country: 'Venezuela',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Lagos',
        country: 'Nigeria',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["This city is home to a famous sports team.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Accra',
        country: 'Ghana',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Nairobi',
        country: 'Kenya',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Cape Town',
        country: 'South Africa',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Islamabad',
        country: 'Pakistan',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Kiev',
        country: 'Ukraine',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Minsk',
        country: 'Belarus',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Baku',
        country: 'Azerbaijan',
        clues:
          '["A financial hub and a major center for global business.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Doha',
        country: 'Qatar',
        clues:
          '["A financial hub and a major center for global business.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Muscat',
        country: 'Oman',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city was founded over 500 years ago."]',
        trivia:
          '["This city is home to a famous sports team.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'San Francisco',
        country: 'USA',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Los Angeles',
        country: 'USA',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Chicago',
        country: 'USA',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It has a unique underground transportation system."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Boston',
        country: 'USA',
        clues:
          '["A financial hub and a major center for global business.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Miami',
        country: 'USA',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Seattle',
        country: 'USA',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Vancouver',
        country: 'Canada',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "This city was founded over 500 years ago."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Montreal',
        country: 'Canada',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Edinburgh',
        country: 'UK',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Glasgow',
        country: 'UK',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Birmingham',
        country: 'UK',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Marseille',
        country: 'France',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Lyon',
        country: 'France',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Florence',
        country: 'Italy',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["This city is home to a famous sports team.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Milan',
        country: 'Italy',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Naples',
        country: 'Italy',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Hamburg',
        country: 'Germany',
        clues:
          '["A financial hub and a major center for global business.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Munich',
        country: 'Germany',
        clues:
          '["A financial hub and a major center for global business.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Frankfurt',
        country: 'Germany',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'D\u00fcsseldorf',
        country: 'Germany',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Stuttgart',
        country: 'Germany',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Barcelona',
        country: 'Spain',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city was founded over 500 years ago."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Valencia',
        country: 'Spain',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Seville',
        country: 'Spain',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Bilbao',
        country: 'Spain',
        clues:
          '["A financial hub and a major center for global business.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "This city was founded over 500 years ago."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Athens',
        country: 'Greece',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Thessaloniki',
        country: 'Greece',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It has a unique underground transportation system."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Belgrade',
        country: 'Serbia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Zagreb',
        country: 'Croatia',
        clues:
          '["A financial hub and a major center for global business.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It has a unique underground transportation system."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Ljubljana',
        country: 'Slovenia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Bratislava',
        country: 'Slovakia',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Sofia',
        country: 'Bulgaria',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Tallinn',
        country: 'Estonia',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Riga',
        country: 'Latvia',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Vilnius',
        country: 'Lithuania',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Chennai',
        country: 'India',
        clues:
          '["Home to a famous bridge, river, or canal system.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Bangalore',
        country: 'India',
        clues:
          '["A financial hub and a major center for global business.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Hyderabad',
        country: 'India',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Kolkata',
        country: 'India',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Pune',
        country: 'India',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Ho Chi Minh City',
        country: 'Vietnam',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Yangon',
        country: 'Myanmar',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Phnom Penh',
        country: 'Cambodia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It has a unique underground transportation system."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Dhaka',
        country: 'Bangladesh',
        clues:
          '["A financial hub and a major center for global business.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Ulaanbaatar',
        country: 'Mongolia',
        clues:
          '["A financial hub and a major center for global business.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Tashkent',
        country: 'Uzbekistan',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Almaty',
        country: 'Kazakhstan',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Yerevan',
        country: 'Armenia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["This city is home to a famous sports team.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Kuwait City',
        country: 'Kuwait',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Tbilisi',
        country: 'Georgia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Damascus',
        country: 'Syria',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Baghdad',
        country: 'Iraq',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Addis Ababa',
        country: 'Ethiopia',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city was founded over 500 years ago."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Harare',
        country: 'Zimbabwe',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It has a unique underground transportation system.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Kampala',
        country: 'Uganda',
        clues:
          '["Home to a famous bridge, river, or canal system.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Antananarivo',
        country: 'Madagascar',
        clues:
          '["A financial hub and a major center for global business.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city was founded over 500 years ago."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Havana',
        country: 'Cuba',
        clues:
          '["Home to a famous bridge, river, or canal system.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'San Juan',
        country: 'Puerto Rico',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city was founded over 500 years ago."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Port-au-Prince',
        country: 'Haiti',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'San Salvador',
        country: 'El Salvador',
        clues:
          '["Home to a famous bridge, river, or canal system.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It has a unique underground transportation system."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Panama City',
        country: 'Panama',
        clues:
          '["Home to a famous bridge, river, or canal system.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'San Jose',
        country: 'Costa Rica',
        clues:
          '["A financial hub and a major center for global business.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "This city is home to a famous sports team."]',
      },
      {
        city: 'La Paz',
        country: 'Bolivia',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Asunci\u00f3n',
        country: 'Paraguay',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Montevideo',
        country: 'Uruguay',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Brasilia',
        country: 'Brazil',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Guatemala City',
        country: 'Guatemala',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It has a unique underground transportation system."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Managua',
        country: 'Nicaragua',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Porto',
        country: 'Portugal',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Rotterdam',
        country: 'Netherlands',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["It has a unique underground transportation system.", "It is famous for a unique style of local cuisine."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Amsterdam',
        country: 'Netherlands',
        clues:
          '["Home to a famous bridge, river, or canal system.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city was founded over 500 years ago."]',
        trivia:
          '["This city is home to a famous sports team.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'The Hague',
        country: 'Netherlands',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It has a unique underground transportation system."]',
        trivia:
          '["It has a unique tradition celebrated every year.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Luxembourg City',
        country: 'Luxembourg',
        clues:
          '["A financial hub and a major center for global business.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has an iconic skyline with a world-famous building."]',
      },
      {
        city: 'Reykjavik',
        country: 'Iceland',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Malta',
        country: 'Malta',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Hobart',
        country: 'Australia',
        clues:
          '["A financial hub and a major center for global business.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Brisbane',
        country: 'Australia',
        clues:
          '["A popular tourist destination with millions of visitors every year.", "Home to a famous bridge, river, or canal system."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["A famous artist or writer was born in this city.", "This city is home to a famous sports team."]',
      },
      {
        city: 'Adelaide',
        country: 'Australia',
        clues:
          '["A financial hub and a major center for global business.", "A popular tourist destination with millions of visitors every year."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "It is known for having one of the world\'s busiest airports."]',
        trivia:
          '["The local language includes a unique dialect spoken only in this region.", "It has a unique tradition celebrated every year."]',
      },
      {
        city: 'Perth',
        country: 'Australia',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "This city is famous for its historic architecture and landmarks."]',
        fun_fact:
          '["This city has hosted the Olympic Games at least once.", "It has a unique underground transportation system."]',
        trivia:
          '["It has an iconic skyline with a world-famous building.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Auckland',
        country: 'New Zealand',
        clues:
          '["A financial hub and a major center for global business.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is famous for a unique style of local cuisine.", "This city was founded over 500 years ago."]',
        trivia:
          '["This city is home to a famous sports team.", "A famous artist or writer was born in this city."]',
      },
      {
        city: 'Wellington',
        country: 'New Zealand',
        clues:
          '["This city is famous for its historic architecture and landmarks.", "Known for its vibrant nightlife and cultural festivals."]',
        fun_fact:
          '["It is known for having one of the world\'s busiest airports.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["This city is home to a famous sports team.", "The local language includes a unique dialect spoken only in this region."]',
      },
      {
        city: 'Christchurch',
        country: 'New Zealand',
        clues:
          '["Known for its vibrant nightlife and cultural festivals.", "A financial hub and a major center for global business."]',
        fun_fact:
          '["This city was founded over 500 years ago.", "This city has hosted the Olympic Games at least once."]',
        trivia:
          '["A famous artist or writer was born in this city.", "The local language includes a unique dialect spoken only in this region."]',
      },
    ]);

    console.log('Seeding completed for TABLE: cities_data');
  }
}
