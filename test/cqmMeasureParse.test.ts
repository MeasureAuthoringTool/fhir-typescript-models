import { CqmMeasure, ICqmMeasure } from "../src/models/cqm";
import rawMeasureJson from "./resources/cqm-measure.json";

const measureJson: ICqmMeasure = rawMeasureJson;

function cloneJson(json: ICqmMeasure): ICqmMeasure {
  return JSON.parse(JSON.stringify(json)) as ICqmMeasure;
}

describe("Parsing CQM Measure JSON", () => {
  it("s parsed JSON should match to serialized JSON", () => {
    const cqmMeasure: CqmMeasure = CqmMeasure.parse(measureJson);
    expect(cqmMeasure).toBeDefined();
    expect(cqmMeasure.toJSON()).toEqual(measureJson);
  });

  it("s parsed measure can be cloned", () => {
    const cqmMeasure: CqmMeasure = CqmMeasure.parse(measureJson);
    const clonedMeasure: CqmMeasure = cqmMeasure.clone();
    expect(clonedMeasure).toBeDefined();
    expect(clonedMeasure.toJSON()).toEqual(measureJson);
    expect(clonedMeasure.toJSON()).toEqual(cqmMeasure.toJSON());
  });

  it("Should parse population_sets in a CQM Measure", () => {
    const updatedMeasureJson = cloneJson(measureJson);
    const popSet = {
      populations: {
        resource_type: "CohortPopulationMap",
        IPP: {
          library_name: "library_CohortPopulationMap",
          statement_name: "name_CohortPopulationMap",
        },
      },
      stratifications: [
        {
          title: "title_Stratification",
          stratification_id: "random_stratification_id",
          statement: {
            library_name: "library_Stratification",
            statement_name: "name_Stratification",
          },
        },
      ],
      supplemental_data_elements: [
        {
          library_name: "library_name_ref1",
          statement_name: "name_ref1",
        },
        { library_name: "library_name_ref2", statement_name: "name_ref2" },
      ],
      observations: [
        {
          observation_function: {
            library_name: "observation_function_library_name_1",
            statement_name: "observation_function_statement_name_1",
          },
          observation_parameter: {
            library_name: "observation_parameter_library_name_1",
            statement_name: "observation_parameter_statement_name_1",
          },
          aggregation_type: "aggregation_type_1",
          set_id: "set_id_1",
        },
        {
          observation_function: {
            library_name: "observation_function_library_name_2",
            statement_name: "observation_function_statement_name_2",
          },
          observation_parameter: {
            library_name: "observation_parameter_library_name_2",
            statement_name: "observation_parameter_statement_name_2",
          },
          aggregation_type: "aggregation_type_2",
          set_id: "set_id_2",
        },
      ],
    };
    updatedMeasureJson.population_sets = [popSet];
    const cqmMeasure: CqmMeasure = CqmMeasure.parse(updatedMeasureJson);
    expect(cqmMeasure).toBeDefined();
    expect(cqmMeasure.population_sets).toBeDefined();
    expect(cqmMeasure.population_sets?.length).toEqual(1);
    expect(cqmMeasure.allPopulationSetsAndStratifications).toBeDefined();
    expect(cqmMeasure.stratificationsAsPopulationSets).toBeDefined();
    expect(cqmMeasure.allPopulationSetsAndStratifications.length).toEqual(2);
    expect(cqmMeasure.stratificationsAsPopulationSets.length).toEqual(1);
    expect(cqmMeasure.allPopulationSetsAndStratifications).toEqual(
      cqmMeasure.population_sets?.concat(
        cqmMeasure.stratificationsAsPopulationSets,
      ),
    );
    expect(
      cqmMeasure.stratificationsAsPopulationSets[0].population_set_id,
    ).toEqual("random_stratification_id");
    expect(
      cqmMeasure.stratificationsAsPopulationSets[0].populations?.codes,
    ).toEqual(["IPP", "STRAT"]);
    expect(
      cqmMeasure.stratificationsAsPopulationSets[0].populations?.STRAT,
    ).toBeDefined();
    expect(
      cqmMeasure.stratificationsAsPopulationSets[0].populations?.STRAT
        ?.library_name,
    ).toEqual("library_Stratification");
    expect(
      cqmMeasure.stratificationsAsPopulationSets[0].populations?.STRAT
        ?.statement_name,
    ).toEqual("name_Stratification");
    expect(cqmMeasure.toJSON()).toEqual(updatedMeasureJson);
  });

  it("Should parse a CQM Measure with FHIR Resources as Source Data Criteria", () => {
    const updatedMeasureJson = cloneJson(measureJson);
    const sourceDataCriteria = {
      fhir_resource: {
        meta: {
          profile: [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition",
          ],
        },
        resourceType: "Condition",
        verificationStatus: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-ver-status",
              code: "confirmed",
              display: "Confirmed",
            },
          ],
        },
        category: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/condition-category",
                code: "encounter-diagnosis",
                display: "Encounter Diagnosis",
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "116288000",
              display: "Paralytic stroke (disorder)",
            },
          ],
        },
        subject: { reference: "Patient/denom-EXM104" },
        id: "denom-EXM104-1",
      },
    };
    updatedMeasureJson.source_data_criteria = [sourceDataCriteria];
    const cqmMeasure: CqmMeasure = CqmMeasure.parse(updatedMeasureJson);
    expect(cqmMeasure).toBeDefined();
    expect(cqmMeasure.source_data_criteria).toBeDefined();
    expect(cqmMeasure.toJSON()).toEqual(updatedMeasureJson);
  });
});
