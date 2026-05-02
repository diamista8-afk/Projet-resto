const bouton = document.querySelector('.btn-welcome');

if (bouton) {
  bouton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}

function goContact() {
    window.location.href = "contact.html";
}

function handleSubmit() {
  const fields = ['name', 'email', 'num', 'Commande'];
  const empty = fields.find(id => !document.getElementById(id).value.trim());

  if (empty) {
    document.getElementById(empty).focus();
    return;
  }

  const success = document.getElementById('success');
  success.classList.remove('d-none');
}

// Bouton retour en haut
const btn = document.getElementById('btnRetour');
if (btn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 90) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.category-section');

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {

            buttons.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            sections.forEach(function(section) {
                if (filter === 'all' || section.dataset.category === filter) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });

        });
    });

    const signatureSlider = document.querySelector('.signature-slider');
    if (signatureSlider) {
        const slides = signatureSlider.querySelectorAll('.signature-slide');
        let currentIndex = 0;

        function goToSlide(index) {
            signatureSlider.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(function() {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        }, 4500);
    }

});

function handleSubmit() {
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const number = document.getElementById('number').value;
  const sujet = document.getElementById('sujet').value;

  document.getElementById('contactForm').style.display = 'none';

  const message = document.createElement('div');
  message.id = 'confirmationMessage';
  message.innerHTML = `
    <h5> Demande envoyée avec succès !</h5>
    <p>Merci <strong>${name}</strong>, votre ${sujet} a bien été reçue.</p>
    <p> Date : <strong>${date}</strong> pour <strong>${number}</strong> personne(s).</p>
    <p>Nous vous contacterons très prochainement.</p>
    <button onclick="resetForm()">Nouvelle demande</button>
  `;

  document.getElementById('contactForm').parentNode.appendChild(message);
}

function resetForm() {
  document.getElementById('contactForm').style.display = 'block';
  document.getElementById('confirmationMessage').remove();
  document.getElementById('contactForm').reset();
}

