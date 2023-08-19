import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';



export const getSkills = async () => {
    const query = gql `
    query Skills {
        skills {
          name
          level
          category
        }
      }
  `;

  try {
    const result:any = await request(graphqlAPI, query);
    // console.log(result.skills)
    return result.skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

export const getAchivements = async () => {
    const query = gql `
    query Achv {
      achivements {
        title
        desc
        link
        background {
          url
        }
        date {
          stage
          end
        }
      }
      }
  `;

  try {
    const result:any = await request(graphqlAPI, query);
    // console.log(result.skills)
    return result.achivements;
  } catch (error) {
    console.error('Error fetching achivements:', error);
    return [];
  }
}

export const getEducation = async () => {
    const query = gql `
    query Achv {
      educations {
        name
        institution
        desc
        date {
          start
          end
        }
        background {
          url
        }
      }
      }
  `;

  try {
    const result:any = await request(graphqlAPI, query);
    // console.log(result.skills)
    return result.educations;
  } catch (error) {
    console.error('Error fetching educations:', error);
    return [];
  }
}

export const getWorks = async () => {
    const query = gql `
    query Work {
      works {
        name
        desc
        icon
      }
      }
  `;

  try {
    const result:any = await request(graphqlAPI, query);
    // console.log(result.skills)
    return result.works;
  } catch (error) {
    console.error('Error fetching works:', error);
    return [];
  }
}

export const getExps = async () => {
    const query = gql `
    query Achv {
      experiences {
        title
        company
        desc
        duration {
          start
          end
        }
      }
      }
  `;

  try {
    const result:any = await request(graphqlAPI, query);
    // console.log(result.skills)
    return result.experiences;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

export const getProfiles = async () => {
    const query = gql `
    query Achv {
      profiles {
        name
        link
        desc
      }
      }
  `;

  try {
    const result:any = await request(graphqlAPI, query);
    return result.profiles;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return [];
  }
}

export const getTrainings = async () => {
    const query = gql `
    query Achv {
      trainings {
        name
        desc
        link
        background {
          url
        }
      }
      }
  `;

  try {
    const result:any = await request(graphqlAPI, query);
    // console.log(result.skills)
    return result.trainings;
  } catch (error) {
    console.error('Error fetching trainings:', error);
    return [];
  }
}