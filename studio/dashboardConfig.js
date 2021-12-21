export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61c23d219424be6f273f425e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7c6bttuy',
                  apiId: '5cc75b8d-abf4-46ee-aef2-d2463e2b77a4'
                },
                {
                  buildHookId: '61c23d213f2bd8712aed3ff3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1ts6rbjx',
                  apiId: '95729fd3-1f65-4c66-8506-dc5dda282a63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bo-blank/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1ts6rbjx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
