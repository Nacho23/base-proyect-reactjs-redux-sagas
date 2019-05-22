export default {
  items: [
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Inicio',
      url: '/dashboard',
      icon: 'icon-home'
    },
    {
      name: 'Cotizaciones',
      url: '/price',
      icon: 'fa fa-tags'
    },
    /*{
      name: 'Clientes',
      url: '/customer',
      icon: 'fa fa-users'
    },
    {
      name: 'Trabajadores',
      url: '/employee',
      icon: 'fa fa-users'
    },
    {
      name: 'Ajustes',
      url: '/config',
      icon: 'fa fa-cogs'
    },*/
    {
      name: 'Soporte',
      url: 'https://coreui.io/react/',
      icon: 'icon-phone',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
