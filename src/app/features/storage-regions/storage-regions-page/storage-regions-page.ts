import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StorageRegionI, StorageRegions } from '../../../services/storage-regions';
import { LoaderComponent } from "../../../components/loader-component/loader-component";
import { Filter } from "../../../components/filter/filter";
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-storage-regions-page',
  standalone: true,
  templateUrl: './storage-regions-page.html',
  styleUrl: './storage-regions-page.css',
  providers: [StorageRegions],
  imports: [LoaderComponent, Filter, MatIcon]
})
export class StorageRegionsPage implements OnInit {
  loading = false;
  storageRegions: StorageRegionI[] = [];
  filtredRegions: StorageRegionI[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private storageRegionsSrv: StorageRegions
  ) { }

  ngOnInit(): void {
    this.getStorageRegions();
  }

  getStorageRegions() {
    this.loading = true;
    this.storageRegionsSrv.getAll().subscribe({
      next: (regions) => {
        this.storageRegions = regions;
        this.filtredRegions = [...this.storageRegions];
        this.loading = false;
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    })
  }

  onFilterChanged(filter: string) {
    const lowerFilter = filter.toLowerCase();
    this.filtredRegions = this.storageRegions.filter((c: { name: string; regionCode: string; }) =>
      c.name.toLowerCase().includes(lowerFilter) ||
      c.regionCode.toLowerCase().includes(lowerFilter)
    );
  }

  deleteConfirm(regionCode: any) {

  }

}
