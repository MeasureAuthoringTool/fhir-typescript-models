import "jest-extended";
import {CohortPopulationMap} from "../src/models/cqm/CohortPopulationMap";
import {ContinuousVariablePopulationMap} from "../src/models/cqm/ContinuousVariablePopulationMap";
import {lookupPopulationMapSubclass} from "../src/models/cqm/PopulationMapping";
import {PopulationSet} from "../src/models/cqm/PopulationSet";
import {ProportionPopulationMap} from "../src/models/cqm/ProportionPopulationMap";
import {RatioPopulationMap} from "../src/models/cqm/RatioPopulationMap";
import {StatementReference} from "../src/models/cqm/StatementReference";

describe("Populations", () => {
  it("", () => {
    expect(lookupPopulationMapSubclass("unknown")).toBeUndefined();
    expect(lookupPopulationMapSubclass("CohortPopulationMap")).toBeDefined();
    expect(lookupPopulationMapSubclass("CohortPopulationMap")).toEqual(CohortPopulationMap);
    expect(lookupPopulationMapSubclass("ContinuousVariablePopulationMap")).toEqual(ContinuousVariablePopulationMap);
    expect(lookupPopulationMapSubclass("ProportionPopulationMap")).toEqual(ProportionPopulationMap);
    expect(lookupPopulationMapSubclass("RatioPopulationMap")).toEqual(RatioPopulationMap);
  });

  it("can serialize/deserialize CQM::StatementReference", () => {
    const itJson = {"library_name": "library1", "statement_name": "name1"};
    const it: StatementReference = StatementReference.parse(itJson);
    expect(it.library_name).toEqual('library1');
    expect(it.statement_name).toEqual('name1');
    expect(it.toJSON()).toEqual(itJson);
  });

  it("can serialize/deserialize CQM::CohortPopulationMap", () => {
    const itJson = {
      "resource_type": "CohortPopulationMap",
      "IPP": {"library_name": "library1", "statement_name": "name1"}
    };
    const it: CohortPopulationMap = CohortPopulationMap.parse(itJson);
    expect(it.resource_type).toEqual('CohortPopulationMap');
    expect(it.IPP).toBeDefined();
    expect(it.IPP?.library_name).toEqual('library1');
    expect(it.IPP?.statement_name).toEqual('name1');
    expect(it.toJSON()).toEqual(itJson);
  });

  it("can serialize/deserialize CQM::PopulationSet", () => {
    const itJson = {
      "populations": {
        "resource_type": "CohortPopulationMap",
        "IPP": {"library_name": "library_CohortPopulationMap", "statement_name": "name_CohortPopulationMap"}
      },
      "stratifications": [{
        "title": "title_Stratification",
        "stratification_id": "random_stratification_id",
        "statement": {"library_name": "library_Stratification", "statement_name": "name_Stratification"}
      }],
      "supplemental_data_elements": [{
        "library_name": "library_name_ref1",
        "statement_name": "name_ref1"
      }, {"library_name": "library_name_ref2", "statement_name": "name_ref2"}],
      "observations": [{
        "observation_function": {
          "library_name": "observation_function_library_name_1",
          "statement_name": "observation_function_statement_name_1"
        },
        "observation_parameter": {
          "library_name": "observation_parameter_library_name_1",
          "statement_name": "observation_parameter_statement_name_1"
        },
        "aggregation_type": "aggregation_type_1",
        "set_id": "set_id_1"
      }, {
        "observation_function": {
          "library_name": "observation_function_library_name_2",
          "statement_name": "observation_function_statement_name_2"
        },
        "observation_parameter": {
          "library_name": "observation_parameter_library_name_2",
          "statement_name": "observation_parameter_statement_name_2"
        },
        "aggregation_type": "aggregation_type_2",
        "set_id": "set_id_2"
      }]
    };
    const it: PopulationSet = PopulationSet.parse(itJson);
    expect(it).toBeDefined();
    expect(it.toJSON()).toEqual(itJson);
  });
});
