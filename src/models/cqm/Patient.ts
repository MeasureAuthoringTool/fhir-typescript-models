import {DomainResource} from "../classes/DomainResource";
import {Patient} from "../classes/Patient";
import {IDomainResource} from "../interfaces/IDomainResource";

export class CqmPatient {
  // tslint:disable-next-line:variable-name
  public expected_values?: Array<any>;
  // tslint:disable-next-line:variable-name
  public notes?: string;
  // tslint:disable-next-line:variable-name
  public measure_ids?: Array<string>;

  // tslint:disable-next-line:variable-name
  public fhir_patient?: Patient;
  // tslint:disable-next-line:variable-name
  public data_elements?: Array<DomainResource>;

  public static parse(
    json: any,
    providedInstance: CqmPatient = new CqmPatient()
  ): CqmPatient {
    const newInstance: CqmPatient = providedInstance;

    newInstance.expected_values = json.expected_values;

    newInstance.notes = json.notes;
    newInstance.measure_ids = json.measure_ids;
    newInstance.fhir_patient = Patient.parse(json.fhir_patient);

    if (json.data_elements) {
      newInstance.data_elements = json.data_elements.map((x: IDomainResource) => DomainResource.parse(x));
    }

    return newInstance;
  }

  public toJSON(): any {
    const result: any = {};

    if (this.expected_values) {
      result.expected_values = this.expected_values.map((x) => x.toJSON());
    }

    result.notes = this.notes;

    result.measure_ids = this.measure_ids;

    if (this.fhir_patient) {
      result.fhir_patient = this.fhir_patient.toJSON();
    }

    if (this.data_elements) {
      result.data_elements = this.data_elements.map((x) => x.toJSON());
    }

    return result;
  }
}
