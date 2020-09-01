import { Bundle, BundleEntry, BundleType, Patient } from "../fhir/internal";
import { DataElement } from "./DataElement";

export class CqmPatient {
  // MongoDB ID
  public id?: string;
  // tslint:disable-next-line:variable-name
  public expected_values?: Array<any>;
  // tslint:disable-next-line:variable-name
  public notes?: string;
  // tslint:disable-next-line:variable-name
  public measure_ids?: Array<string>;
  // tslint:disable-next-line:variable-name
  public fhir_patient?: Patient;
  // tslint:disable-next-line:variable-name
  public data_elements?: Array<DataElement>;
  // mongoid created timestamp
  // tslint:disable-next-line:variable-name
  public created_at?: string;
  // mongoid updated timestamp
  // tslint:disable-next-line:variable-name
  public updated_at?: string;

  public static parse(
    json: any,
    providedInstance: CqmPatient = new CqmPatient()
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
      // @ts-ignore
      newInstance.data_elements = json.data_elements.map((x) =>
        DataElement.parse(x)
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

  public toJSON(): any {
    const result: any = {};

    if (this.id) {
      result.id = this.id;
    }
    if (this.expected_values) {
      result.expected_values = this.expected_values.map((x) => x.toJSON());
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
