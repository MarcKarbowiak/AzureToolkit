import { Pipe, PipeTransform } from '@angular/core';
import { Face } from './computerVisionResponse';

@Pipe({
    name: 'facegenderfilter',
    pure: false
})
export class FaceGenderFilterPipe implements PipeTransform {
  transform(items: Face[], filter: Face): Face[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Face) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Face} Face The face to compare to the filter.
   * @param {Face} filter The filter to apply.
   * @return {boolean} True if face satisfies filters, false if not.
   */
  applyFilter(face: Face, filter: Face): boolean {
    return face.gender == filter.gender;
  }
}