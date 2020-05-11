const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(structure) {
  const rootElem = document.createElement('ul');

  structure.forEach(el => {
    const element = document.createElement('li');
    const icon = document.createElement('i');
    const title = document.createElement('p');

    element.classList.add('element');
    icon.classList.add('material-icons');
    title.textContent = el.title;
    element.appendChild(icon);
    element.appendChild(title);

    if (el.folder) {
      icon.innerText = 'folder';
      icon.classList.add('folder');
      element.classList.add('close');
      title.classList.add('folders');

      if (!el.children) {
        const emptyTree = document.createElement('ul');
        const emptyElem = document.createElement('li');
        const emptyTitle = document.createElement('p');

        emptyTitle.innerText = 'Folder is Empty';
        emptyElem.appendChild(emptyTitle);
        emptyTitle.classList.add('empty');
        emptyTree.appendChild(emptyElem);
        element.appendChild(emptyTree);
      } else {
        let child = createTree(el.children);
        element.appendChild(child);
      }

      element.addEventListener('click', function() {
        if (event.target.getAttribute('class') === 'material-icons folder' ||
        event.target.getAttribute('class') === 'folders') {
          if (icon.innerText === 'folder') {
            icon.innerText = 'folder_open';
            element.classList.remove('close');
          } else {
            icon.innerText = 'folder';
            element.classList.add('close');
          }
        }
        event.stopPropagation();
      });
    } else {
      icon.innerText = 'insert_drive_file';
      icon.classList.add('file');
      element.appendChild(icon);
      element.appendChild(title);
    }

    rootElem.appendChild(element);
  })

  return rootElem;
}

rootNode.appendChild(createTree(data));