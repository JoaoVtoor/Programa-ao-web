const medicationList = document.getElementById("medication-list");
const addMedicationForm = document.getElementById("add-medication-form");

addMedicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const medicationName = document.getElementById("medication-name").value;
  const medicationDose = document.getElementById("medication-dose").value;
  const medicationFrequency = document.getElementById(
    "medication-frequency"
  ).value;
  const medicationDuration = document.getElementById(
    "medication-duration"
  ).value;

  const medicationItem = document.createElement("li");
  medicationItem.innerHTML = `
    <span>${medicationName} - ${medicationDose}</span>
    <span>Frequência: ${medicationFrequency} - Duração: ${medicationDuration}</span>
    <button class="remove-medication">Remover Medicamento</button>
  `;

  medicationList.appendChild(medicationItem);

  const removeButtons = document.getElementsByClassName("remove-medication");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => {
      medicationList.removeChild(medicationItem);
    });
  }

  addMedicationForm.reset();
});
