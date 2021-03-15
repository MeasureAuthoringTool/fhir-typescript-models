/* eslint-disable import/prefer-default-export, import/no-cycle */
import { Bundle, BundleEntry, BundleType, Patient } from "../../fhir/internal";
import { DataElement, ICqmPatient } from "../index";

export class CqmPatient {
  // MongoDB ID
  public id?: string;

  public expected_values?: Array<unknown>;

  public notes?: string;

  public measure_ids?: Array<string>;

  public fhir_patient?: Patient;

  public data_elements?: Array<DataElement>;

  // mongoid created timestamp
  public created_at?: string;

  // mongoid updated timestamp
  public updated_at?: string;

  public static parse(
    json: ICqmPatient,
    providedInstance: CqmPatient = new CqmPatient(),
  ): CqmPatient {
    const newInstance: CqmPatient = providedInstance;

    if (json.id) {
      newInstance.id = json.id;
    }
    if (json.expected_values) {
      newInstance.expected_values = json.expected_values;
    }
    if (json.notes) {
      newInstance.notes = json.notes;
    }
    if (json.measure_ids) {
      newInstance.measure_ids = json.measure_ids;
    }
    if (json.fhir_patient) {
      newInstance.fhir_patient = Patient.parse(json.fhir_patient);
    }
    if (json.data_elements) {
      newInstance.data_elements = json.data_elements.map((x) =>
        DataElement.parse(x),
      );
    }
    if (json.created_at) {
      newInstance.created_at = json.created_at;
    }
    if (json.updated_at) {
      newInstance.updated_at = json.updated_at;
    }
    return newInstance;
  }

  public toJSON(): ICqmPatient {
    const result: ICqmPatient = {};

    if (this.id) {
      result.id = this.id;
    }
    if (this.expected_values) {
      result.expected_values = this.expected_values;
    }
    if (this.notes) {
      result.notes = this.notes;
    }
    if (this.measure_ids) {
      result.measure_ids = this.measure_ids;
    }
    if (this.fhir_patient) {
      result.fhir_patient = this.fhir_patient.toJSON();
    }
    if (this.data_elements) {
      result.data_elements = this.data_elements.map((x) => x.toJSON());
    }
    if (this.created_at) {
      result.created_at = this.created_at;
    }
    if (this.updated_at) {
      result.updated_at = this.updated_at;
    }
    return result;
  }

  public toBundle(): Bundle {
    const bundle: Bundle = new Bundle();
    bundle.id = this.id;
    bundle.type = new BundleType();
    bundle.type.value = "collection";
    bundle.entry = [];
    if (this.fhir_patient) {
      const patientEntry: BundleEntry = new BundleEntry();
      patientEntry.resource = this.fhir_patient;
      bundle.entry.push(patientEntry);
    }
    if (this.data_elements) {
      const dataElementsEntries: Array<BundleEntry> = this.data_elements
        .filter((d) => d.fhir_resource)
        .map((d) => d.fhir_resource)
        .map((r) => {
          const de: BundleEntry = new BundleEntry();
          de.resource = r;
          return de;
        });
      if (dataElementsEntries) {
        bundle.entry = bundle.entry?.concat(dataElementsEntries);
      }
    }
    return bundle;
  }

  public clone(): CqmPatient {
    return CqmPatient.parse(this.toJSON());
  }
}

/* eslint-enable import/prefer-default-export, import/no-cycle */
