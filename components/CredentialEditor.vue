<template>
    <div>
      <!-- VerifiableId -->
      <div v-if="issuable.type == 'VerifiableId'">
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.FIRST_NAME')" aria-label="First name" v-model="issuable.credentialData.credentialSubject.firstName">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.LAST_NAME')" aria-label="Family name" v-model="issuable.credentialData.credentialSubject.familyName">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-people"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.GENDER')" aria-label="Gender" v-model="issuable.credentialData.credentialSubject.gender">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.DATE_OF_BIRTH')" aria-label="DateOfBirth" v-model="issuable.credentialData.credentialSubject.dateOfBirth">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-map"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.NATIONALITY')" aria-label="Nationality" v-model="issuable.credentialData.credentialSubject.nationality">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-geo-alt"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.PLACE_OF_BIRTH')" aria-label="PlaceOfBirth" v-model="issuable.credentialData.credentialSubject.placeOfBirth">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-credit-card-2-front"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.PERSONAL_IDENTIFIER')" aria-label="PersonalIdentifier" v-model="issuable.credentialData.credentialSubject.personalIdentifier">
            </div>
          </div>
        </div>
      </div>

      <!-- VerifiableDiploma -->
      <div v-if="issuable.type == 'VerifiableDiploma'">
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.FIRST_NAME')" aria-label="First name" v-model="issuable.credentialData.credentialSubject.givenNames">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.LAST_NAME')" v-model="issuable.credentialData.credentialSubject.familyName">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.DATE_OF_BIRTH')" aria-label="DateOfBirth" v-model="issuable.credentialData.credentialSubject.dateOfBirth">
            </div>
          </div>
        </div>
      </div>

      <!-- VerifiableVaccinationCertificate -->
      <!-- <div v-if="issuable.type == 'VerifiableVaccinationCertificate'">
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.FIRST_NAME')" aria-label="First name" v-model="issuable.credentialData.credentialSubject.givenNames">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.LAST_NAME')" v-model="issuable.credentialData.credentialSubject.familyName">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-people"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.GENDER')" aria-label="Gender" v-model="issuable.credentialData.credentialSubject.personSex">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.DATE_OF_BIRTH')" aria-label="DateOfBirth" v-model="issuable.credentialData.credentialSubject.dateOfBirth">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.VACCINE_OR_PROFYLAXIS')" aria-label="vaccineOrProphylaxis" v-model="issuable.credentialData.credentialSubject.vaccinationProphylaxisInformation[0].vaccineOrProphylaxis">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.VACCINE_MEDICINAL_PRODUCT')" aria-label="vaccineMedicinalProduct" v-model="issuable.credentialData.credentialSubject.vaccinationProphylaxisInformation[0].vaccineMedicinalProduct">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.DOSE_NUMBER')" aria-label="doseNumber" v-model="issuable.credentialData.credentialSubject.vaccinationProphylaxisInformation[0].doseNumber">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.DATE_OF_VACCINATION')" aria-label="dateOfVaccination" v-model="issuable.credentialData.credentialSubject.vaccinationProphylaxisInformation[0].dateOfVaccination">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.ADMINISTERING_CENTER')" aria-label="administeringCentre" v-model="issuable.credentialData.credentialSubject.vaccinationProphylaxisInformation[0].administeringCentre">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.COUNTRY_OF_VACCINATION')" aria-label="countryOfVaccination" v-model="issuable.credentialData.credentialSubject.vaccinationProphylaxisInformation[0].countryOfVaccination">
            </div>
          </div>
        </div>
      </div> -->

      <!-- ProofOfResidence -->
      <!-- <div v-if="issuable.type == 'ProofOfResidence'">
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.LAST_NAME')" v-model="issuable.credentialData.credentialSubject.familyName">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-card-text"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.FIRST_NAME')" aria-label="firstName" v-model="issuable.credentialData.credentialSubject.firstNames">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-people"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.GENDER')" aria-label="Gender" v-model="issuable.credentialData.credentialSubject.gender">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.DATE_OF_BIRTH')" aria-label="DateOfBirth" v-model="issuable.credentialData.credentialSubject.dateOfBirth">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.STREET_ADDRESS')" aria-label="streetAddress" v-model="issuable.credentialData.credentialSubject.address.streetAddress">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.POSTAL_CODE')" aria-label="postalCode" v-model="issuable.credentialData.credentialSubject.address.postalCode">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.LOCALITY')" aria-label="locality" v-model="issuable.credentialData.credentialSubject.address.locality">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.COUNTRY_NAME')" aria-label="countryName" v-model="issuable.credentialData.credentialSubject.address.countryName">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.FAMILY_STATUS')" aria-label="familyStatus" v-model="issuable.credentialData.credentialSubject.familyStatus">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.IDENTIFICATION_NUMBER')" aria-label="identificationNumber" v-model="issuable.credentialData.credentialSubject.identificationNumber">
            </div>
          </div>
        </div>
        <div class="row _forms mb-3">
          <div class="col-11">
            <div class="right-inner-addon input-container">
              <i class="bi bi-calendar2-event"></i>
              <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.NATIONALITY')" aria-label="nationality" v-model="issuable.credentialData.credentialSubject.nationality">
            </div>
          </div>
        </div>
      </div> -->

  <!-- ParticipantCredential -->
  <!-- <div v-if="issuable.type == 'ParticipantCredential'">
    <div class="row _forms mb-3">
      <div class="row _forms mb-3">
        <div class="col-11">
          <div class="right-inner-addon input-container">
            <i class="bi bi-card-text"></i>
            <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.ID')" aria-label="id" v-model="issuable.credentialData.credentialSubject.id">
          </div>
        </div>
      </div>
      <div class="col-11">
        <div class="right-inner-addon input-container">
          <i class="bi bi-card-text"></i>
          <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.PROGRAM_NAME')" v-model="issuable.credentialData.credentialSubject.programName">
        </div>
      </div>
      <div class="row _forms mb-3">
        <div class="col-11">
          <div class="right-inner-addon input-container">
            <i class="bi bi-calendar2-event"></i>
            <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.DOMAIN')" aria-label="domain" v-model="issuable.credentialData.credentialSubject.domain">
          </div>
        </div>
      </div>
      <div class="row _forms mb-3">
        <div class="col-11">
          <div class="right-inner-addon input-container">
            <i class="bi bi-calendar2-event"></i>
            <input :disabled="!enableEditor" type="text" :class="enableEditor ? 'form-control border-primary' : 'form-control'" :placeholder="$t('CREDENTIAL.ETH_ADDRESS')" aria-label="ethereumAddress" v-model="issuable.credentialData.credentialSubject.ethereumAddress">
          </div>
        </div>
      </div>
    </div>
  </div>  -->
    </div>
</template>
<script>
export default {
  name: "CredentialEditor",
  props: {
    issuable: {},
    enableEditor: false
  }
}
</script>

<style scoped>

</style>
